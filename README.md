### Prices Verification with Playwright

This project involves creating an automated test using TypeScript and Playwright to verify that the product prices of SecureLine VPN and AntiTrack (Mac version) on the Avast store’s landing page match the prices in the cart.

npm install

npx playwright install

npx playwright test --headed

npx playwright test

## Allure Reports

[](https://github.com/Marina51533/webdriverIO_example/blob/main/README.md#allure-reports)

 **1. Generate [Allure Report](https://allurereport.org/docs/install/)** :

After the test run is complete, generate the Allure report using the following command:

```shell
npm run test:report
```

**2. View Allure Report** :

To open the report in a browser and view the detailed test results, use the following command:

```shell
  npm run test:report:open
```

This will start a local server and automatically open the Allure report in your default web browser.
