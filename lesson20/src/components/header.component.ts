import { Page, Locator } from 'playwright';
import { BaseComponent } from './base/base.component.ts';

export class HeaderComponent extends BaseComponent {

    public constructor(page: Page) {
        super(page, '#main_navbar');
    }

    public get searchInput(): Locator {
        return this.base.locator('#docsearch-input');
    }

    public async openPage(pageName: string): Promise<void> {
        const pageLink = this.base.getByRole('link', { name: `${pageName}`, exact: true });
        await pageLink.click();
    }

    public async search(): Promise<void> {
        await this.base.locator('#docsearch-1 button.DocSearch-Button').click();
    }
}
