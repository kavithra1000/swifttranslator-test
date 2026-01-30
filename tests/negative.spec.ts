import { test, expect } from '@playwright/test';
import { TranslatorPage } from '../models/TranslatorPage.js';
import negativeTestCases from '../data/negativeData.js';

test.describe('Swift Translator Data-Driven Suite', () => {

  for (const tc of negativeTestCases) {
    test(`Negative: ${tc.id}`, async ({ page }) => {
      const translator = new TranslatorPage(page);
      await translator.goto();
      await translator.translate(tc.input);
      await page.waitForTimeout(500);
      await expect(translator.outputBox).not.toContainText(tc.notExpected, { timeout: 30000 });
    });
  }

});
