export class TranslatorPage {
    constructor(page) {
        this.page = page;
        this.inputBox = page.locator('textarea').first();
        this.outputBox = page.locator(
            'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
        );
    }

    async goto() {
        await this.page.goto('https://www.swifttranslator.com/');
    }

    async translate(text, timeout = { timeout: 30000 }) {
        await this.inputBox.fill(text, timeout);
    }
}