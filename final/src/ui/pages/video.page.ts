import { expect, Locator } from '@playwright/test';
import { BasePage } from './base.page.ts';
import { DeepSearchComponent } from '../components/deep-search.component.ts';

export class VideoPage extends BasePage {
    private readonly SEARCH_INPUT_SELECTOR = 'input.MuiInputBase-input'; 
    private readonly SEARCH_IN_VIDEO_BTN_SELECTOR = 'button:has-text("Search in this video")';
    private readonly DEEP_SEARCH_PANEL_SELECTOR = '.MuiBox-root:has([role="tablist"])';
    private readonly TITLE_SELECTOR = '[data-a="page-player-main-info"] [data-a="video-title"]';

    public readonly searchInput: Locator = this.page.locator(this.SEARCH_INPUT_SELECTOR);
    public readonly searchInVideoBtn: Locator = this.page.locator(this.SEARCH_IN_VIDEO_BTN_SELECTOR);
    public readonly videoTitle: Locator = this.page.locator(this.TITLE_SELECTOR);
    public readonly deepSearch = new DeepSearchComponent(this.page.locator(this.DEEP_SEARCH_PANEL_SELECTOR), this.page);

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