import { test, expect } from '@playwright/test';
import { TranslatorPage } from '../models/TranslatorPage.js';
import positiveTestCases from '../data/positiveData.js';

test.describe('Swift Translator Data-Driven Suite', () => {

  for (const tc of positiveTestCases) {
    test(`Positive: ${tc.id}`, async ({ page }) => {
      const translator = new TranslatorPage(page);
      await translator.goto();
      await translator.translate(tc.input);
      await page.waitForTimeout(500);
      await expect(translator.outputBox).toContainText(tc.expected, { timeout: 30000 });
    });
  }

});
