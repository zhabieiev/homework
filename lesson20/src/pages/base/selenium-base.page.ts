import { Page } from 'playwright';
import { BasePage } from './base.page.ts';
import { HeaderComponent } from '../../components/header.component.ts';
import { SideMenuComponent } from '../../components/side-menu.component.ts';
import { BaseSearchComponent } from '../../components/base/base-search.component.ts';

export class SeleniumBasePage extends BasePage {
    public readonly header: HeaderComponent;
    public readonly sideMenu: SideMenuComponent;
    public readonly searchMenu: BaseSearchComponent;

    public constructor(
        page: Page,
        url = 'https://www.selenium.dev'
    ) {
        super(page, url);
        this.header = new HeaderComponent(page);
        this.sideMenu = new SideMenuComponent(page);
        this.searchMenu = new BaseSearchComponent(page);
    }
}
