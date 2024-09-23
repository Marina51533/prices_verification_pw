# Price Verification Project

This project is a Playwright-based test suite written in TypeScript that automates the verification of product prices on the Avast store. The suite compares the prices of SecureLine VPN and AntiTrack (Mac version) between the landing page and the shopping cart to ensure they match. The results of these comparisons are saved to files after each test run.

## Setup

### Prerequisites

* Node.js (v14 or higher)
* npm (v6 or higher)
* Playwright
* Allure Reporter (for generating test reports)

### Installation

**Clone the repository:**

```
https://github.com/Marina51533/prices_verification_pw.git
```

**Install dependencies:**

```
npm install
```

**Install Playwright browsers:**

```
npx playwright install
```

## Running the Tests

### Running All Tests

To run all the tests:

```
npx playwright test --headed
```

To run all the tests in runner:

```
npx playwright test --ui
```

## Allure Reports

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

## Viewing Price Comparison Results

After each test, the price comparison results are saved in the `price_comp_results_files` directory. The files are named using the following pattern:

`price_comparison_<SECTION>_section_<TIMESTAMP>.txt`

For example:

`price_comparison_AntiTrack_section_1663774200000.txt price_comparison_VPN_section_1663774250000.txt`

These files contain a log of the prices on the landing page and the shopping cart, along with a comparison result.

## Video Recordings

One test run was recorded, and the video is stored in the `video` directory. The video provides a visual record of the test execution, allowing you to review the actions performed during each test.

## Project Details

### Frameworks and Tools Used

* **[Playwright](https://playwright.dev/):** Used for browser automation and testing.
* **[TypeScript](https://www.typescriptlang.org/):** Used for type-safe JavaScript development.
* **[Allure Reporter:](https://allurereport.org/docs/install/)** Used to generate detailed test reports.
* **Node.js File System (`fs`) Module:** Used to handle file operations, such as creating and writing to files.

### Key Features

* **Page Object Model (POM):** The project uses the POM design pattern for better test maintenance and readability.
* **Price comparison:** After each test run, the project compares the prices of specific products on the landing page with the prices in the shopping cart. The results are saved in a text file for review.
* **Test reports:** Allure Reporter is integrated for detailed test reporting, including screenshots and video recordings of test runs.
