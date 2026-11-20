import assert from "node:assert/strict";
import { after, test } from "node:test";
// eslint-disable-next-line import/no-unresolved -- Vite uses package exports.
import { createServer } from "vite";

const server = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
});
after(() => server.close());

const { compileTemplate } = await server.ssrLoadModule(
  "/storybook/handlebars.js",
);

async function renderStory(file, name, args) {
  const stories = await server.ssrLoadModule(
    `/storybook/stories/${file}.stories.js`,
  );
  const story = stories[name];
  return (story.render || stories.default.render)(args || story.args);
}

test("default card renders its configured and updated card data", async () => {
  const { Default } = await server.ssrLoadModule(
    "/storybook/stories/03-Components/card.stories.js",
  );
  const html = Default.render(Default.args);
  assert.match(html, /class="health-card__link" href="#">Card Title<\/a>/);
  assert.match(html, /Card content goes here\./);
  assert.match(html, /2024-06-05/);
  assert.match(html, /class="health-card__tag">Tag/);

  const updated = Default.render({
    card: { ...Default.args.card, title: "Updated title" },
  });
  assert.match(updated, /class="health-card__link" href="#">Updated title<\/a>/);
});

test("nested variant contexts retain default image attributes", async () => {
  const html = await renderStory("image", "BorderLink");
  assert.match(html, /class="image--link image--border"/);
  assert.match(html, /width="800" height="450"/);
  assert.match(html, /data-src="\/images\/picsum-20-1865x1319.jpg"/);
});

test("native partials compose components with their explicit example data", async () => {
  const cards = await renderStory("band", "CardsResources");
  assert.equal((cards.match(/class="health-card /g) || []).length, 4);
  assert.match(cards, /class="health-card__link" href="#">[^<]+/);

  const imageCards = await renderStory("band", "CardsImage");
  assert.equal((imageCards.match(/class="health-card /g) || []).length, 5);
  assert.equal((imageCards.match(/health-card--horizontal/g) || []).length, 2);

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

test("component data is supplied by the caller, not by another story's defaults", async () => {
  const first = compileTemplate("{{> @image image=image}}")({
    image: {
      url: "/explicit-image.jpg",
      width: 400,
      height: 225,
      ratio: 56.25,
    },
  });
  const second = await renderStory("image", "Border");
  assert.match(first, /width="400"/);
  assert.match(first, /data-src="\/explicit-image.jpg"/);
  assert.match(second, /width="800"/);
});

test("partial registrations are local to each compiled template", () => {
  const render = compileTemplate("{{> @example child}}", {
    "@example": "<strong>{{label}}</strong>",
  });
  assert.equal(
    render({ label: "Parent", child: { label: "Child" } }),
    "<strong>Child</strong>",
  );
  assert.equal(render({ label: "Parent", child: {} }), "<strong></strong>");
  assert.throws(
    () => compileTemplate("{{> @example child}}")({ child: {} }),
    /partial @example could not be found/,
  );
});
