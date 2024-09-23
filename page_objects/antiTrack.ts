import { Locator, Page } from "@playwright/test";

export class AntiTrackPage {
  readonly page: Page;
  readonly antiTrackHeadline: Locator;

  constructor(page: Page) {
    this.page = page;
    this.antiTrackHeadline = page.locator("h1.hero-headline h0");
  }

  async openAntiTrackURL() {
    await this.page.goto("https://www.avast.com/en-gb/antitrack#mac");
  }
}
