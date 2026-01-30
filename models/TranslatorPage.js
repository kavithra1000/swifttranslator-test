export class TranslatorPage {
  constructor(page) {
    this.page = page;
    this.inputBox = page.locator('textarea').first();
    this.outputBox = page.locator(
      'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
    );
    this.clearButton = page.locator('button', { hasText: 'Clear' });
  }

  async goto() {
    await this.page.goto('https://www.swifttranslator.com/');
  }

  async translate(text) {
    await this.inputBox.fill(text);
  }

  async clear() {
    await this.clearButton.click();
  }
}
