import { BaseComponent } from './base/base.component';
import { Page, Locator } from '@playwright/test';

export class SideMenuComponent extends BaseComponent {
    constructor(page: Page) {
        super(page, '#td-sidebar-menu');
    }

    link(text: string): Locator {
        return this.base.locator(`//a[span[text()='${text}']]`);
    }

    async openSection(text: string): Promise<void> {
        await this.link(text).click();
    }
}
