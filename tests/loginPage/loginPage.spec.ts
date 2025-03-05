import { expect, test } from "@playwright/test";
import config from "./../../configs/config.json";
import { getObjectById } from "../../utils/getObjects";
import {
  loginButtonId,
  passwordInputId,
  userNameInputId,
} from "../../selectors/loginPage/loginPage";

test("Login to Swag Labs with valid credentials", async ({ page }) => {
  const userName = "standard_user";
  const password = "secret_sauce";
  const urlExpected = "https://www.saucedemo.com/inventory.html";

  await page.goto(config.SwagLabsUrl);
  await getObjectById(page, userNameInputId).fill(userName);
  await getObjectById(page, passwordInputId).fill(password);
  await getObjectById(page, loginButtonId).click();

  expect(await page.url()).toBe(urlExpected);
  await page.close();
});
test("Login to Swag Labs with invalid credentials", async ({ page }) => {
  const userName = "hello";
  const password = "world";
  const urlExpected = "https://www.saucedemo.com/";

  await page.goto(config.SwagLabsUrl);
  await getObjectById(page, userNameInputId).fill(userName);
  await getObjectById(page, passwordInputId).fill(password);
  await getObjectById(page, loginButtonId).click();

  expect(await page.url()).toBe(urlExpected);
  await page.close();
});

test("Login to Swag Labs with invalid password", async ({ page }) => {
  const userName = "standard_user";
  const password = "world";
  const urlExpected = "https://www.saucedemo.com/";

  await page.goto(config.SwagLabsUrl);
  await getObjectById(page, userNameInputId).fill(userName);
  await getObjectById(page, passwordInputId).fill(password);
  await getObjectById(page, loginButtonId).click();

  expect(await page.url()).toBe(urlExpected);
  page.close();
});

test("Login to Swag Labs with invalid username", async ({ page }) => {
  const userName = "world";
  const password = "secret_sauce";
  const urlExpected = "https://www.saucedemo.com/";

  await page.goto(config.SwagLabsUrl);
  await getObjectById(page, userNameInputId).fill(userName);
  await getObjectById(page, passwordInputId).fill(password);
  await getObjectById(page, loginButtonId).click();

  expect(await page.url()).toBe(urlExpected);
  page.close();
});

test("Login to Swag Labs with empty username and password", async ({
  page,
}) => {
  const userName = "";
  const password = "";
  const urlExpected = "https://www.saucedemo.com/";

  await page.goto(config.SwagLabsUrl);
  await getObjectById(page, userNameInputId).fill(userName);
  await getObjectById(page, passwordInputId).fill(password);
  await getObjectById(page, loginButtonId).click();

  expect(page.url()).toBe(urlExpected);
  page.close();
});

test("add-to-cart-sauce-labs-backpack", async ({ page }) => {
  const userName = "standard_user";
  const password = "secret_sauce";
  const urlExpected = "https://www.saucedemo.com/inventory.html";
  await page.goto(config.SwagLabsUrl);
  await getObjectById(page, userNameInputId).fill(userName);
  await getObjectById(page, passwordInputId).fill(password);
  await getObjectById(page, loginButtonId).click();
  await getObjectById(page, "add-to-cart-sauce-labs-backpack").click();

  expect(page.url()).toBe(urlExpected);
  page.close();
});

test("remove-sauce-labs-backpack", async ({ page }) => {
  const userName = "standard_user";
  const password = "secret_sauce";
  const urlExpected = "https://www.saucedemo.com/inventory.html";
  await page.goto(config.SwagLabsUrl);
  await getObjectById(page, userNameInputId).fill(userName);
  await getObjectById(page, passwordInputId).fill(password);
  await getObjectById(page, loginButtonId).click();
  await getObjectById(page, "add-to-cart-sauce-labs-backpack").click();
  await getObjectById(page, "remove-sauce-labs-backpack").click();
  expect(page.url()).toBe(urlExpected);
  page.close();
});
test("chackout", async ({ page }) => {
  const userName = "standard_user";
  const password = "secret_sauce";
  const urlExpected = "https://www.saucedemo.com/checkout-step-one.html";
  await page.goto(config.SwagLabsUrl);
  await getObjectById(page, userNameInputId).fill(userName);
  await getObjectById(page, passwordInputId).fill(password);
  await getObjectById(page, loginButtonId).click();
  await getObjectById(page, "add-to-cart-sauce-labs-backpack").click();
  await getObjectById(page, "shopping_cart_container").click();
  await getObjectById(page, "checkout").click();
  expect(page.url()).toBe(urlExpected);
  page.close();
});

test("checkout-step-one", async ({ page }) => {
  const userName = "standard_user";
  const password = "secret_sauce";
  const urlExpected = "https://www.saucedemo.com/checkout-step-two.html";
  await page.goto(config.SwagLabsUrl);
  await getObjectById(page, userNameInputId).fill(userName);
  await getObjectById(page, passwordInputId).fill(password);
  await getObjectById(page, loginButtonId).click();
  await getObjectById(page, "add-to-cart-sauce-labs-backpack").click();
  await getObjectById(page, "shopping_cart_container").click();
  await getObjectById(page, "checkout").click();
  await getObjectById(page, "first-name").fill("test");
  await getObjectById(page, "last-name").fill("test");
  await getObjectById(page, "postal-code").fill("test");
  await getObjectById(page, "continue").click();
  expect(page.url()).toBe(urlExpected);
  page.close();
});

test("checkout-step-two", async ({ page }) => {
  const userName = "standard_user";
  const password = "secret_sauce";
  const urlExpected = "https://www.saucedemo.com/checkout-complete.html";
  await page.goto(config.SwagLabsUrl);
  await getObjectById(page, userNameInputId).fill(userName);
  await getObjectById(page, passwordInputId).fill(password);
  await getObjectById(page, loginButtonId).click();
  await getObjectById(page, "add-to-cart-sauce-labs-backpack").click();
  await getObjectById(page, "shopping_cart_container").click();
  await getObjectById(page, "checkout").click();
  await getObjectById(page, "first-name").fill("test");
  await getObjectById(page, "last-name").fill("test");
  await getObjectById(page, "postal-code").fill("test");
  await getObjectById(page, "continue").click();
  await getObjectById(page, "finish").click();
  expect(page.url()).toBe(urlExpected);
  page.close();
});
test("checkout-complete", async ({ page }) => {
  const userName = "standard_user";
  const password = "secret_sauce";
  const urlExpected = "https://www.saucedemo.com/checkout-complete.html";
  await page.goto(config.SwagLabsUrl);
  await getObjectById(page, userNameInputId).fill(userName);
  await getObjectById(page, passwordInputId).fill(password);
  await getObjectById(page, loginButtonId).click();
  await getObjectById(page, "add-to-cart-sauce-labs-backpack").click();
  await getObjectById(page, "shopping_cart_container").click();
  await getObjectById(page, "checkout").click();
  await getObjectById(page, "first-name").fill("test");
  await getObjectById(page, "last-name").fill("test");
  await getObjectById(page, "postal-code").fill("test");
  await getObjectById(page, "continue").click();
  await getObjectById(page, "finish").click();
  expect(page.url()).toBe(urlExpected);
  page.close();
});
test("react-burger-menu-btn", async ({ page }) => {
  const userName = "standard_user";
  const password = "secret_sauce";
  const urlExpected = "https://www.saucedemo.com/inventory.html";
  await page.goto(config.SwagLabsUrl);
  await getObjectById(page, userNameInputId).fill(userName);
  await getObjectById(page, passwordInputId).fill(password);
  await getObjectById(page, loginButtonId).click();
  await getObjectById(page, "react-burger-menu-btn").click();
  expect(page.url()).toBe(urlExpected);
  page.close();
});
test("reset_sidebar_link_again", async ({ page }) => {
  const userName = "standard_user";
  const password = "secret_sauce";
  const urlExpected = "https://www.saucedemo.com/inventory.html";
  await page.goto(config.SwagLabsUrl);
  await getObjectById(page, userNameInputId).fill(userName);
  await getObjectById(page, passwordInputId).fill(password);
  await getObjectById(page, loginButtonId).click();
  await getObjectById(page, "react-burger-menu-btn").click();
  await getObjectById(page, "reset_sidebar_link").click();
  expect(page.url()).toBe(urlExpected);
  page.close();
});
test("close_sidebar_btn", async ({ page }) => {
  const userName = "standard_user";
  const password = "secret_sauce";
  const urlExpected = "https://www.saucedemo.com/inventory.html";
  await page.goto(config.SwagLabsUrl);
  await getObjectById(page, userNameInputId).fill(userName);
  await getObjectById(page, passwordInputId).fill(password);
  await getObjectById(page, loginButtonId).click();
  await getObjectById(page, "react-burger-menu-btn").click();
  await getObjectById(page, "react-burger-cross-btn").click();
  expect(page.url()).toBe(urlExpected);
  page.close();
});
test("inventory_sidebar_link", async ({ page }) => {
  const userName = "standard_user";
  const password = "secret_sauce";
  const urlExpected = "https://www.saucedemo.com/inventory.html";
  await page.goto(config.SwagLabsUrl);
  await getObjectById(page, userNameInputId).fill(userName);
  await getObjectById(page, passwordInputId).fill(password);
  await getObjectById(page, loginButtonId).click();
  await getObjectById(page, "react-burger-menu-btn").click();
  await getObjectById(page, "inventory_sidebar_link").click();
  expect(page.url()).toBe(urlExpected);
  page.close();
});
test("about_sidebar_link", async ({ page }) => {
  const userName = "standard_user";
  const password = "secret_sauce";
  const urlExpected = "https://saucelabs.com/";
  await page.goto(config.SwagLabsUrl);
  await getObjectById(page, userNameInputId).fill(userName);
  await getObjectById(page, passwordInputId).fill(password);
  await getObjectById(page, loginButtonId).click();
  await getObjectById(page, "react-burger-menu-btn").click();
  await getObjectById(page, "about_sidebar_link").click();
  expect(page.url()).toBe(urlExpected);
  page.close();
});
test("logout_sidebar_link", async ({ page }) => {
  const userName = "standard_user";
  const password = "secret_sauce";
  const urlExpected = "https://www.saucedemo.com/";
  await page.goto(config.SwagLabsUrl);
  await getObjectById(page, userNameInputId).fill(userName);
  await getObjectById(page, passwordInputId).fill(password);
  await getObjectById(page, loginButtonId).click();
  await getObjectById(page, "react-burger-menu-btn").click();
  await getObjectById(page, "logout_sidebar_link").click();
  expect(page.url()).toBe(urlExpected);
  page.close();
});
