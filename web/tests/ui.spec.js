const { test, expect } = require("@playwright/test");

test("short password is rejected", async ({ page }) => {
  await page.goto("/");
  await page.fill("#password", "abc123");
  await page.click('button[type="submit"]');
  await expect(page.locator("body")).toContainText("8 characters");
});

test("common password is rejected", async ({ page }) => {
  await page.goto("/");
  await page.fill("#password", "password");
  await page.click('button[type="submit"]');
  await expect(page.locator("body")).toContainText("too common");
});

test("valid password reaches the welcome page", async ({ page }) => {
  await page.goto("/");
  await page.fill("#password", "Tr0ub4dor&3-unique");
  await page.click('button[type="submit"]');
  await expect(page.locator("body")).toContainText("Welcome");
});

test("logout returns to the login page", async ({ page }) => {
  await page.goto("/");
  await page.fill("#password", "Tr0ub4dor&3-unique");
  await page.click('button[type="submit"]');
  await page.click('button[type="submit"]');
  await expect(page.locator("body")).toContainText("Login");
});
