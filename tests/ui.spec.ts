import { test, expect } from '@playwright/test';
import { TranslatorPage } from '../models/TranslatorPage.js';

test.describe('Swift Translator Data-Driven Suite', () => {

  test('UI_01: Clear button empties input and output', async ({ page }) => {
    const translator = new TranslatorPage(page);
    await translator.goto();
    await translator.translate('mama gedhara yanawa');
    await translator.clear();

    await expect(translator.inputBox).toHaveValue('');
    await expect(translator.outputBox).toHaveText('');
  });


});
