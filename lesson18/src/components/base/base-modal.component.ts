import { Locator, Page } from '@playwright/test';
import { BaseComponent } from './base.component';

export class BaseModalComponent extends BaseComponent {
    constructor(page: Page, title: string) {
        super(
            page,
            `//main//*[self::h1 or self::h2][normalize-space()="${title}"]/ancestor::*[1]`
        );
    }

    get heading(): Locator {
        return this.base.locator('h1, h2');
    }

    async getTitle(): Promise<string> {
        const text = await this.heading.textContent();
        return text?.trim() ?? '';
    }
}
