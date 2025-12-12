import { BaseComponent } from './base/base.component.ts';
import { Page } from 'playwright';

export class SideMenuComponent extends BaseComponent {
    public constructor(page: Page) {
        super(page, '#td-sidebar-menu');
    }

    public async openSection(sectionName: string): Promise<void> {
        const pageLink = this.base.getByRole('link', { name: `${sectionName}`, exact: true });
        await pageLink.click();
    }
}
