// src/pages/docs/docs-base.page.ts
import { Page, Locator } from '@playwright/test';
import { BaseModalComponent } from '../../components/base/base-modal.component';

export class DocsBasePage extends BaseModalComponent {
    constructor(page: Page, title: string) {
        super(page, title);
    }

    public get heading(): Locator {
        return this.base.locator('h1, h2');
    }
}
