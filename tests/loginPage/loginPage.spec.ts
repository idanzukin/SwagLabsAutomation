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

  expect(page.url()).toBe(urlExpected);
  page.close();
});

test("Login to Swag Labs with invalid credentials", async ({ page }) => {
  const userName = "hello";
  const password = "world";
  const urlExpected = "https://www.saucedemo.com/inventory.html";

  await page.goto(config.SwagLabsUrl);
  await getObjectById(page, userNameInputId).fill(userName);
  await getObjectById(page, passwordInputId).fill(password);
  await getObjectById(page, loginButtonId).click();

  expect(page.url()).toBe(urlExpected);
  page.close();
});

test("Login to Swag Labs with invalid password", async ({ page }) => {
  const userName = "standard_user";
  const password = "world";
  const urlExpected = "https://www.saucedemo.com/inventory.html";

  await page.goto(config.SwagLabsUrl);
  await getObjectById(page, userNameInputId).fill(userName);
  await getObjectById(page, passwordInputId).fill(password);
  await getObjectById(page, loginButtonId).click();

  expect(page.url()).toBe(urlExpected);
  page.close();
});

test("Login to Swag Labs with invalid username", async ({ page }) => {
  const userName = "world";
  const password = "secret_sauce";
  const urlExpected = "https://www.saucedemo.com/inventory.html";

  await page.goto(config.SwagLabsUrl);
  await getObjectById(page, userNameInputId).fill(userName);
  await getObjectById(page, passwordInputId).fill(password);
  await getObjectById(page, loginButtonId).click();

  expect(page.url()).toBe(urlExpected);
  page.close();
});
