import { Locator, Page } from "@playwright/test";

export class SecureLineVPNPage{
  readonly page: Page;
  readonly vpnHeadline: Locator;

  constructor(page: Page) {
    this.page = page;
    this.vpnHeadline = page.locator("h1.hero-headline");
  }

  async openSecureLineVPNPage() {
    await this.page.goto("https://www.avast.com/en-gb/secureline-vpn#mac");
  }


}
