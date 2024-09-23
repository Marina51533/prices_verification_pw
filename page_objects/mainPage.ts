import { Locator, Page } from "@playwright/test";

export class MainPage {
  readonly page: Page;
  readonly acceptBtn: Locator;
  readonly privacyNavMenuItem: Locator;
  readonly secureLineVPNLink: Locator;
  readonly productComparisonHeader: Locator;
  readonly acceptOKBtn: Locator


  constructor(page: Page) {
    this.page = page;
    this.acceptBtn = page.locator("#onetrust-accept-btn-handler");
    this.privacyNavMenuItem = page
      .locator(".subcategory-text", { hasText: "Privacy" })
      .first();
    this.secureLineVPNLink = page
      .getByRole("listitem")
      .locator(".product-name-string", { hasText: "SecureLine VPN" });
    this.productComparisonHeader = page.locator(".row-header .h4");
  }

  async submitPopUpOnMainPage() {
    if (await this.acceptBtn.isVisible()) {
      await this.acceptBtn.click();
    }
  }

  async clickOnPrivacyMenuItem() {
    await this.privacyNavMenuItem.click();
  }

  async clickOnSecureLineVPNLink() {
    await this.secureLineVPNLink.click();
  }
}
