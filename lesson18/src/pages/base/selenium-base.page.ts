import { BasePage } from './base.page';
import { Page } from '@playwright/test';
import { HeaderComponent } from '../../components/header.component';

export class SeleniumBasePage extends BasePage {
    public readonly header: HeaderComponent;

    constructor(page: Page, subUrl = '') {
        super(page, `https://www.selenium.dev/${subUrl}`);
        this.header = new HeaderComponent(page);
    }

    async goto(): Promise<void> {
        await super.goto();
        await this.header.waitVisible();
    }
}
