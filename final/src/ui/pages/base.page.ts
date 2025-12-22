import { Page, Locator, expect } from '@playwright/test';
import { VariablesController } from '../../api/utils/controllers/variables.controller.ts';

export abstract class BasePage {
    constructor(
        protected page: Page, 
        protected varController: VariablesController
    ) {}

    async navigate(urlOrKey: string) {
        const targetUrl = this.varController.getVar(urlOrKey) || urlOrKey;
        await this.page.goto(targetUrl, { waitUntil: 'domcontentloaded' });
    }

    async waitForUrlContains(path: string) {
        await expect(this.page).toHaveURL(new RegExp(path));
    }
}