import assert from "node:assert/strict";
import { after, test } from "node:test";
// eslint-disable-next-line import/no-unresolved -- Vite uses package exports.
import { createServer } from "vite";

const server = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
});
const { componentStory, renderComponent } = await server.ssrLoadModule(
  "/storybook/component-preview.js",
);
after(() => server.close());

test("nested variant contexts retain default image attributes", () => {
  const html = renderComponent("image--border-link");
  assert.match(html, /class="image--link image--border"/);
  assert.match(html, /width="800" height="450"/);
  assert.match(html, /data-src="\/images\/picsum-20-1865x1319.jpg"/);
});

test("render helpers and partials resolve composed components", () => {
  const cards = renderComponent("band--cards-resources");
  assert.equal((cards.match(/class="health-card /g) || []).length, 4);
  assert.match(cards, /class="health-card__link" href="#">[^<]+/);

  const videos = renderComponent("band--video-listing");
  assert.equal(
    (videos.match(/class="health-video__preview"/g) || []).length,
    3,
  );
  assert.match(videos, /data-src="\/images\/picsum-867-1280x720.jpg"/);
  assert.match(renderComponent("search"), /health-loading--search/);
});

test("configured and alternate templates retain their own content", () => {
  assert.match(renderComponent("step-indicator--numbered"), /<ol>/);
  assert.match(
    renderComponent("step-indicator--progress"),
    /data-counter-start="5"/,
  );
  assert.match(
    renderComponent("sub-header--campaign-secondary"),
    /health-sub-header__content--secondary/,
  );
  assert.match(renderComponent("video--preview"), /data-src="https:/);
});

test("legacy header asset paths and nested dark navigation resolve", () => {
  assert.match(renderComponent("header"), /src="\/images\/logo.svg"/);
  const dark = renderComponent("header--dark");
  assert.match(dark, /src="\/images\/logo--reverse.svg"/);
  assert.match(dark, /au-main-nav--dark/);
});

test("story overrides do not mutate another story's default context", () => {
  const first = componentStory("image--border", { image: { width: 400 } });
  const second = componentStory("image--border");
  assert.equal(first.args.image.width, 400);
  assert.equal(second.args.image.width, 800);
  assert.equal(first.args.image.url, second.args.image.url);
});

test("unknown components fail explicitly", () => {
  assert.throws(() => componentStory("missing-component"), /Unknown component/);
  assert.throws(
    () => renderComponent("image--missing-variant"),
    /Unknown component/,
  );
});
