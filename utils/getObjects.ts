import { Locator, Page } from "playwright";

export function getObjectByDataTestId(page: Page, dataTestId: string): Locator {
  return page.locator(`[data-test="${dataTestId}"]`);
}

export function getObjectById(page: Page, id: string): Locator {
  return page.locator(`#${id}`);
}

export function getObjectByClass(page: Page, className: string): Locator {
  return page.locator(`.${className}`);
}
