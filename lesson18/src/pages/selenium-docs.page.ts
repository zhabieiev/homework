import { SeleniumBasePage } from './base/selenium-base.page';
import { Page, Locator } from '@playwright/test';
import { SideMenuComponent } from '../components/side-menu.component';

export class SeleniumDocsPage extends SeleniumBasePage {
    public readonly sidebar: SideMenuComponent;

    constructor(page: Page) {
        super(page, 'documentation/');
        this.sidebar = new SideMenuComponent(page);
    }

    get pageTitle(): Locator {
        return this.page.locator('main h1');
    }
}
