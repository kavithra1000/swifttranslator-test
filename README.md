Swift Translator Automation Project
This repository contains a professional automation suite for the Swift Translator web application. Built using Playwright and TypeScript, the project implements industry-standard design patterns to ensure scalability, maintainability, and robust test coverage.

🚀 Project Overview
The goal of this project is to validate the core functionality of the Swift Translator app, ensuring accurate text translation across various languages and graceful handling of invalid inputs.

Key Features
Page Object Model (POM): Decouples page-specific logic from test scripts for better maintenance.

Data-Driven Testing (DDT): Utilizes centralized data arrays to run exhaustive test permutations.

Cross-Browser Support: Configured to run on Chromium, Firefox, and Webkit.

Automated Reporting: Generates detailed HTML reports including trace logs and screenshots on failure.

Validation: Includes both positive (functional) and negative (edge case) verification.

📁 Project Structure
Plaintext
├── data/
│   ├── positiveData.js      # Array of valid translation inputs & expected outputs
│   └── negativeData.js      # Array of invalid inputs & error message validations
├── models/
│   └── TranslatorPage.js    # Page Object Model defining selectors and actions
├── tests/
│   └── translation.spec.js  # Main test suite using loops for data-driven execution
├── playwright.config.js     # Global configuration for Playwright
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation
🛠️ Installation & Setup
Clone the repository (or extract the project folder).

Install Dependencies: Ensure you have Node.js installed, then run:

Bash
npm install
Install Browsers:

Bash
npx playwright install
🧪 Running Tests
You can execute the test suite using the following commands:

Run all tests in headless mode:

Bash
npx playwright test
Run tests in headed mode (UI visible):

Bash
npx playwright test --headed
Run on a specific browser:

Bash
npx playwright test --project=chromium
Run a specific test file:

Bash
npx playwright test tests/translation.spec.js
🏗️ Architecture & Design
Page Object Model (POM)
To keep the code clean, all interactions with the Swift Translator (e.g., typing text, selecting languages, clicking "Translate") are encapsulated within the TranslatorPage class. This ensures that if the UI changes, only the Page Object needs updating, not every individual test.

Data-Driven Testing (DDT)
The project utilizes a loop-based execution strategy. Instead of hard-coding values, the test suite imports arrays from the data/ directory and iterates through them:

JavaScript
// Example of the loop structure used in tests
for (const record of positiveData) {
  test(`Translate ${record.inputLanguage} to ${record.targetLanguage}`, async ({ page }) => {
    // Test logic here...
  });
}
This approach allows for adding new test scenarios simply by updating the JavaScript data objects, without writing additional code.

📊 Test Reports
After the tests complete, Playwright automatically generates a comprehensive report.

To view the report:

Bash
npx playwright show-report
Failures: If a test fails, the report includes a step-by-step breakdown, screenshots, and a Trace Viewer file to help debug the exact point of failure.
