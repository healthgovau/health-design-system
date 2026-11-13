// @ts-check
import { test, expect } from '@playwright/test';

test.describe("Accordion component", () => {

  test("successfully loads with visible accordion group elements", async ({ page }) => {
    await page.goto("/node/60");
    const accordionGroups = page.locator(".au-accordion-group");
    await expect(accordionGroups).toHaveCount(2);
    const accordionControl = page.locator(".au-accordion-group__controls");
    await expect(accordionControl).toHaveCount(1);
    // Expect a title "to contain" a substring.
    await expect(page.getByRole("heading", { name: "Accordion group" })).toHaveCount(1);
    // await expect(page).toHaveScreenshot("node-16.webp", { fullPage: true });
  });

  test("can toggle an accordion open and closed", async ({ page }) => {
    await page.goto("/node/60");
    const firstAccordion = page.locator(".au-accordion").first();
    const accordionBody = firstAccordion.locator(".au-accordion__body");
    const accordionTitle = firstAccordion.getByRole("button", { name: "Guerrilla Warfare (Default accordion style)" });

    await expect(accordionBody).not.toBeVisible();
    await accordionTitle.click();
    await expect(accordionTitle).toHaveAttribute("aria-expanded", "true");
    await expect(accordionBody).toHaveClass(/au-accordion--open/);
    await expect(accordionBody).toBeVisible();
    await accordionTitle.click();
    await expect(accordionTitle).toHaveAttribute("aria-expanded", "false");
    await expect(accordionBody).not.toHaveClass(/au-accordion--open/);
    await expect(accordionBody).not.toBeVisible();
  });

  test("can open and close all accordions", async ({ page }) => {
    await page.goto("/node/60");
    const firstAccordion = page.locator(".au-accordion").first();
    const accordionTitle = firstAccordion.locator(".au-accordion__title");
    const accordionBody = firstAccordion.locator(".au-accordion__body");

    await expect(accordionBody).not.toBeVisible();

    const openAllButton = page.getByRole("button", { name: "Open all" });
    await openAllButton.click();
    await expect(accordionTitle).toHaveAttribute("aria-expanded", "true");
    await expect(accordionBody).toHaveClass(/au-accordion--open/);
    await expect(accordionBody).toBeVisible();

    const closeAllButton = page.getByRole("button", { name: "Close all" });
    await closeAllButton.click();
    await expect(accordionTitle).toHaveAttribute("aria-expanded", "false");
    await expect(accordionBody).not.toHaveClass(/au-accordion--open/);
    await expect(accordionBody).not.toBeVisible();
  });
});
