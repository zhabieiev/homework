import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './base.page.ts';
import { DeepSearchComponent } from '../components/deep-search.component.ts';
import { VariablesController } from '../../support/utils/variables.controller.ts';

export class VideoPage extends BasePage {
    private readonly SEARCH_INPUT_SELECTOR = 'input.MuiInputBase-input'; 
    private readonly SEARCH_IN_VIDEO_BTN_SELECTOR = 'button:has-text("Search in this video")';
    private readonly DEEP_SEARCH_PANEL_SELECTOR = '.MuiBox-root:has([role="tablist"])';
    private readonly TITLE_SELECTOR = '[data-a="page-player-main-info"] [data-a="video-title"]';

    public readonly searchInput: Locator;
    public readonly searchInVideoBtn: Locator;
    public readonly videoTitle: Locator;
    public readonly deepSearch: DeepSearchComponent;

    constructor(page: Page, varController: VariablesController) {
        super(page, varController);

        this.searchInput = this.page.locator(this.SEARCH_INPUT_SELECTOR);
        this.searchInVideoBtn = this.page.locator(this.SEARCH_IN_VIDEO_BTN_SELECTOR);
        this.videoTitle = this.page.locator(this.TITLE_SELECTOR);
        
        this.deepSearch = new DeepSearchComponent(
            this.page.locator(this.DEEP_SEARCH_PANEL_SELECTOR), 
            this.page
        );
    }

    async verifyVideoTitle(expectedTitle: string) {
        await expect(this.page).not.toHaveURL(/.*index\.html#\/$/);
        await expect(this.videoTitle).toBeVisible();
        await expect(this.videoTitle).toContainText(expectedTitle, { ignoreCase: true });
    }

    async fillVideoSearch(text: string) {
        await this.searchInput.first().waitFor({ state: 'visible', timeout: 15000 });
        await this.searchInput.first().click();
        await this.searchInput.first().fill(text);
    }

    async openDeepSearch() {
        await this.searchInVideoBtn.waitFor({ state: 'visible' });
        await this.searchInVideoBtn.click();
    }
}