import { Locator, Page } from "@playwright/test";

export class ShoppingCartPage {
  readonly page: Page;
  readonly shoppingCartPriceTotal: Locator;


  constructor(page: Page) {
    this.page = page;
    this.shoppingCartPriceTotal = page.locator(".t-priceTable_total");
  }

  async shoppingCartTotalPriceValue() {
    const value = this.shoppingCartPriceTotal.textContent();
    return value;
  }
}
