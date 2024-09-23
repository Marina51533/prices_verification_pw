import { Locator, Page } from "@playwright/test";

export class PricesComparasion {
  readonly page: Page;


  constructor(page: Page) {
    this.page = page;

  }

  async getSubscriptionPrice(aboxValue: string): Promise<string> {
    const integerPart = await this.page
      .locator(`[abox='${aboxValue}'] .integer`)
      .first()
      .textContent();
    const decimalPart = await this.page
      .locator(`[abox='${aboxValue}'] .decimal`)
      .first()
      .textContent();
    return integerPart + decimalPart;
  }

  async clickSubscriptionButton(aboxValue: string): Promise<void> {
    await this.page
      .locator(`[abox='${aboxValue}'].box-cta`, { hasText: "Subscribe now" })
      .first()
      .click();
  }
}
