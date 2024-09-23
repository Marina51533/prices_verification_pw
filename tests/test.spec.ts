import { test, expect } from "@playwright/test";
import { MainPage } from "../page_objects/mainPage";
import { SecureLineVPNPage } from "../page_objects/secureLineVpnPage";
import { ShoppingCartPage } from "../page_objects/shoppingCart";
import { PricesComparasion } from "../page_objects/helpers/pricesComparasion";
import { AntiTrackPage } from "../page_objects/antiTrack";
import * as fs from "fs";
import * as path from "path";


test("navigate to the Privacy section", async ({ page }) => {
  const onMainPage = new MainPage(page);
  await page.goto("https://www.avast.com/en-gb/store#pc");
  await onMainPage.submitPopUpOnMainPage();
  const onSecureLineVPNPage = new SecureLineVPNPage(page);
  await expect(onMainPage.productComparisonHeader).toHaveText(
    "Compare our products"
  );
  await onMainPage.clickOnPrivacyMenuItem();
  await onMainPage.clickOnSecureLineVPNLink();
  await expect(onSecureLineVPNPage.vpnHeadline).toHaveText(
    "Download Avast SecureLine VPN",
    {
      timeout: 5000,
    }
  );
});

test("compare prices for AntiTrack section", async ({ page }) => {
  const onShoppingCartPage = new ShoppingCartPage(page);
  const onPricescomporasion = new PricesComparasion(page);
  const onAntiTrackPage = new AntiTrackPage(page);
   const onMainPage = new MainPage(page);
  await onAntiTrackPage.openAntiTrackURL();
  await onMainPage.submitPopUpOnMainPage();
  const subscriptionIds = ["1", "2"];
  let comparisonResults = "";
  for (const id of subscriptionIds) {
    await test.step(`Compare price for subscription ID ${id}`, async () => {
      const subscriptionPrice = await onPricescomporasion.getSubscriptionPrice(
        id
      );
      await onMainPage.submitPopUpOnMainPage();
      await onPricescomporasion.clickSubscriptionButton(id);
      await page.waitForTimeout(7000);
      const shoppingCartTotalPriceValue =
        await onShoppingCartPage.shoppingCartTotalPriceValue();
     const comparisonResult = `subscriptionPrice: ${subscriptionPrice}, shoppingCartTotalPriceValue: ${shoppingCartTotalPriceValue}\n`;

     // Log to console
     console.log(comparisonResult);

     comparisonResults += comparisonResult;
      expect(shoppingCartTotalPriceValue).toContain(subscriptionPrice);
      await onAntiTrackPage.openAntiTrackURL();
    });
  }
   const directoryPath = path.join(__dirname, "..", "price_comp_results_files");
   if (!fs.existsSync(directoryPath)) {
     fs.mkdirSync(directoryPath, { recursive: true });
   }

   const fileName = path.join(
     directoryPath,
     `price_comparison_AntiTrack_section_${Date.now()}.txt`
   );
   fs.writeFileSync(fileName, comparisonResults);
   console.log(`Price comparison saved to ${fileName}`);
});

test("compare prices for Avast SecureLine VPN section", async ({ page }) => {
  const onSecureLineVPNPage = new SecureLineVPNPage(page);
  const onShoppingCartPage = new ShoppingCartPage(page);
  const onPricescomporasion = new PricesComparasion(page);
  const onMainPage = new MainPage(page);
  await onSecureLineVPNPage.openSecureLineVPNPage();
  await onMainPage.submitPopUpOnMainPage();
  const subscriptionIds = ["1", "2", "3"];
   let comparisonResults = "";
  for (const id of subscriptionIds) {
    await test.step(`Compare price for subscription ID ${id}`, async () => {
      const subscriptionPrice = await onPricescomporasion.getSubscriptionPrice(
        id
      );
      await onMainPage.submitPopUpOnMainPage();
      await onPricescomporasion.clickSubscriptionButton(id);
      await page.waitForTimeout(10000);
      const shoppingCartTotalPriceValue =
        await onShoppingCartPage.shoppingCartTotalPriceValue();
        const comparisonResult = `subscriptionPrice: ${subscriptionPrice}, shoppingCartTotalPriceValue: ${shoppingCartTotalPriceValue}\n`;

        // Log to console
        console.log(comparisonResult);

        comparisonResults += comparisonResult;
      expect(shoppingCartTotalPriceValue).toContain(subscriptionPrice);
      await onSecureLineVPNPage.openSecureLineVPNPage();
    });
  }
   const directoryPath = path.join(__dirname, "..", "price_comp_results_files");
   if (!fs.existsSync(directoryPath)) {
     fs.mkdirSync(directoryPath, { recursive: true });
   }

   const fileName = path.join(
     directoryPath,
     `price_comparison_VPN_section_${Date.now()}.txt`
   );
   fs.writeFileSync(fileName, comparisonResults);
   console.log(`Price comparison saved to ${fileName}`);
});
