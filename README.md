# Swift Translator - Automated Testing Suite

## Project Overview

This project contains an automated testing suite for **Swift Translator**, a web-based translation application. The test suite is built using **Playwright Test Framework** with JavaScript/TypeScript and implements industry-standard testing practices including **Page Object Model (POM)** design pattern and **data-driven testing** methodology.

The testing suite validates both positive and negative test scenarios to ensure comprehensive coverage of the application's functionality, including input validation, translation accuracy, and error handling.

## Key Features

- **Data-Driven Testing**: Test cases are externalized in structured data files, enabling easy maintenance and scalability
- **Page Object Model**: Implements POM design pattern for better code organization and reusability
- **Comprehensive Test Coverage**: Includes both positive and negative test scenarios
- **Cross-Browser Testing**: Supports testing across multiple browsers (Chromium, Firefox, WebKit)
- **Detailed Reporting**: Generates HTML reports with screenshots and trace files for test analysis
- **Parameterized Tests**: Uses loop-based execution to iterate through multiple test cases efficiently

## Project Structure

```
swift-translator-tests/
├── tests/
│   ├── positive.spec.js          # Positive test scenarios
│   └── negative.spec.js          # Negative test scenarios
├── models/
│   └── TranslatorPage.js         # Page Object Model for translator page
├── data/
│   ├── positiveData.js           # Array of positive test cases
│   └── negativeData.js           # Array of negative test cases
├── playwright.config.js          # Playwright configuration file
├── package.json                  # Project dependencies
└── README.md                     # Project documentation
```

### Directory Descriptions

- **`tests/`**: Contains all test specification files organized by test type (positive/negative scenarios)
- **`models/`**: Houses Page Object Model classes that encapsulate page interactions and selectors
- **`data/`**: Stores test data arrays used for data-driven testing approach
- **`playwright.config.js`**: Central configuration for Playwright settings, browsers, and test execution parameters

## Prerequisites

Before running the tests, ensure you have the following installed:

- **Node.js** (version 14 or higher)
- **npm** (Node Package Manager)

## Installation

1. **Clone or download the project** to your local machine

2. **Navigate to the project directory**:
   ```bash
   cd swift-translator-tests
   ```

3. **Install project dependencies**:
   ```bash
   npm install
   ```

4. **Install Playwright browsers**:
   ```bash
   npx playwright install
   ```

## Running Tests

### Basic Test Execution

Run all tests in headless mode (default):
```bash
npx playwright test
```

### Headed Mode (View Browser)

Run tests with visible browser windows:
```bash
npx playwright test --headed
```

### Run Specific Test File

Execute only positive test scenarios:
```bash
npx playwright test tests/positive.spec.js
```

Execute only negative test scenarios:
```bash
npx playwright test tests/negative.spec.js
```

### Browser-Specific Testing

Run tests on a specific browser:
```bash
# Chromium
npx playwright test --project=chromium

# Firefox
npx playwright test --project=firefox

# WebKit (Safari)
npx playwright test --project=webkit
```

### Debug Mode

Run tests in debug mode with Playwright Inspector:
```bash
npx playwright test --debug
```

### Generate and View Test Report

After test execution, generate an HTML report:
```bash
npx playwright show-report
```

## Testing Approach

### Data-Driven Testing

This project implements **data-driven testing** by storing test cases in separate data files (`positiveData.js` and `negativeData.js`). Each data file exports an array of test case objects containing:

- Input text to be translated
- Expected output or behavior
- Test case description
- Any additional parameters

**Example structure**:
```javascript
// data/positiveData.js
export const positiveTestCases = [
  {
    description: "Translate simple English phrase to Spanish",
    inputText: "Hello World",
    expectedOutput: "Hola Mundo",
    sourceLang: "en",
    targetLang: "es"
  },
  // Additional test cases...
];
```

The test files iterate through these arrays using loops, executing each test case individually:

```javascript
for (const testCase of positiveTestCases) {
  test(testCase.description, async ({ page }) => {
    // Test implementation using testCase data
  });
}
```

**Benefits of this approach**:
- Separation of test data from test logic
- Easy addition of new test cases without modifying test code
- Improved maintainability and readability
- Facilitates test case review and updates

### Page Object Model (POM)

The **Page Object Model** design pattern is implemented through the `TranslatorPage.js` class. This class encapsulates:

- **Page elements**: Selectors for input fields, buttons, and output areas
- **Page actions**: Methods for interacting with the page (e.g., `enterText()`, `clickTranslate()`, `getOutput()`)
- **Page validations**: Methods to verify page state and element visibility

**Example POM structure**:
```javascript
// models/TranslatorPage.js
export class TranslatorPage {
  constructor(page) {
    this.page = page;
    this.inputField = page.locator('#input-text');
    this.translateButton = page.locator('#translate-btn');
    this.outputField = page.locator('#output-text');
  }

  async enterText(text) {
    await this.inputField.fill(text);
  }

  async clickTranslate() {
    await this.translateButton.click();
  }

  async getOutput() {
    return await this.outputField.textContent();
  }
}
```

**Advantages of POM**:
- Centralized element locators for easy maintenance
- Reusable methods across multiple tests
- Reduced code duplication
- Easier updates when UI changes occur

## Test Reports

After test execution, Playwright generates comprehensive test reports:

1. **HTML Report**: 
   - View detailed test results with screenshots and traces
   - Access by running: `npx playwright show-report`
   - Report includes pass/fail status, execution time, and error details

2. **Screenshots**: 
   - Automatically captured on test failure
   - Stored in `test-results/` directory

3. **Trace Files**: 
   - Enable detailed debugging with timeline, network activity, and DOM snapshots
   - Configure in `playwright.config.js` under `use: { trace: 'on-first-retry' }`

## Configuration

Key configuration options in `playwright.config.js`:

- **Timeout settings**: Adjust test and action timeouts
- **Retry logic**: Configure test retries on failure
- **Browser options**: Select which browsers to run tests on
- **Base URL**: Set the application URL for testing
- **Screenshot and video recording**: Configure media capture settings

## Notes for Reviewers

### Test Design Philosophy

1. **Positive Test Cases**: Validate expected functionality with valid inputs across various scenarios, ensuring the translator works correctly for different language pairs and text types.

2. **Negative Test Cases**: Test application robustness by providing invalid inputs, edge cases, and boundary conditions to verify proper error handling and validation.

3. **Loop-Based Execution**: Each test file uses `for...of` loops to iterate through data arrays, creating individual test cases dynamically. This ensures:
   - Each test case is reported separately in test results
   - Failures in one test case don't affect others
   - Clear traceability between test data and test results

### Code Quality

- **Consistent naming conventions** for variables, functions, and files
- **Modular architecture** separating concerns (tests, models, data)
- **Asynchronous handling** using async/await for reliable test execution
- **Comprehensive assertions** to validate expected outcomes

### Best Practices Implemented

- ✅ Separation of test data from test logic
- ✅ Page Object Model for maintainable code
- ✅ Independent test execution (no test interdependencies)
- ✅ Clear test descriptions and documentation
- ✅ Cross-browser compatibility testing
- ✅ Proper error handling and reporting

## Troubleshooting

### Common Issues

**Tests fail with timeout errors**:
- Increase timeout in `playwright.config.js`
- Check network connectivity and application availability

**Browser not launching**:
- Run `npx playwright install` to ensure browsers are installed
- Check system permissions for browser execution

**Element not found errors**:
- Verify selectors in `TranslatorPage.js` match current application structure
- Use `--headed` mode to visually inspect the application state

## Future Enhancements

Potential improvements for the test suite:

- Add visual regression testing for UI consistency
- Implement API testing for backend translation services
- Add performance testing metrics
- Expand test data with multilingual character sets
- Integrate with CI/CD pipeline for automated execution

## Contact & Support

For questions or issues regarding this testing suite, please refer to the project documentation or contact the project maintainer.

---

**Project Type**: Automated Testing Suite  
**Framework**: Playwright Test  
**Language**: JavaScript/TypeScript  
**Design Patterns**: Page Object Model, Data-Driven Testing  
**Last Updated**: January 2026
