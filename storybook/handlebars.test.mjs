import assert from "node:assert/strict";
import { after, test } from "node:test";
// eslint-disable-next-line import/no-unresolved -- Vite uses package exports.
import { createServer } from "vite";

const server = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
});
after(() => server.close());

const { compileTemplate, storyPartial } = await server.ssrLoadModule(
  "/storybook/handlebars.js",
);

async function renderStory(file, name, args) {
  const stories = await server.ssrLoadModule(
    `/storybook/stories/${file}.stories.js`,
  );
  return storyPartial(stories.default, stories[name])(args);
}

test("nested variant contexts retain default image attributes", async () => {
  const html = await renderStory("image", "BorderLink");
  assert.match(html, /class="image--link image--border"/);
  assert.match(html, /width="800" height="450"/);
  assert.match(html, /data-src="\/images\/picsum-20-1865x1319.jpg"/);
});

test("explicit render helpers and partials compose stories", async () => {
  const cards = await renderStory("band", "CardsResources");
  assert.equal((cards.match(/class="health-card /g) || []).length, 4);
  assert.match(cards, /class="health-card__link" href="#">[^<]+/);

  const videos = await renderStory("band", "VideoListing");
  assert.equal(
    (videos.match(/class="health-video__preview"/g) || []).length,
    3,
  );
  assert.match(videos, /data-src="\/images\/picsum-867-1280x720.jpg"/);
  assert.match(
    await renderStory("search", "Default"),
    /health-loading--search/,
  );
});

test("each story explicitly selects its alternate template", async () => {
  assert.match(await renderStory("step-indicator", "Numbered"), /<ol>/);
  assert.match(
    await renderStory("step-indicator", "Progress"),
    /data-counter-start="5"/,
  );
  assert.match(
    await renderStory("sub-header", "CampaignSecondary"),
    /health-sub-header__content--secondary/,
  );
  assert.match(await renderStory("video", "Preview"), /data-src="https:/);
});

test("header paths and explicitly composed dark navigation resolve", async () => {
  assert.match(
    await renderStory("header", "Default"),
    /src="\/images\/logo.svg"/,
  );
  const dark = await renderStory("header", "Dark");
  assert.match(dark, /src="\/images\/logo--reverse.svg"/);
  assert.match(dark, /au-main-nav--dark/);
});

test("composed overrides preserve nested defaults without mutating story args", async () => {
  const first = await renderStory("image", "Border", { image: { width: 400 } });
  const second = await renderStory("image", "Border");
  assert.match(first, /width="400"/);
  assert.match(first, /data-src="\/images\/picsum-20-1865x1319.jpg"/);
  assert.match(second, /width="800"/);
});

test("partial registrations are local to each compiled template", () => {
  const render = compileTemplate('{{render "@example"}}', {
    "@example": () => "<strong>Example</strong>",
  });
  assert.equal(render({}), "<strong>Example</strong>");
  assert.throws(
    () => compileTemplate('{{render "@example"}}')({}),
    /Unknown rendered partial: @example/,
  );
  assert.throws(() => storyPartial({}, {}), /must provide a render function/);
});
