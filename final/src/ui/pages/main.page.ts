import { Locator } from '@playwright/test';
import { BasePage } from './base.page.ts';
import { ChannelComponent } from '../components/channel.component.ts';

export class MainPage extends BasePage {
    private readonly SEARCH_INPUT_SELECTOR = 'input[placeholder*="Search within Video"]';
    private readonly CHANNEL_CONTAINER_SELECTOR = '[data-a="channel-type-background"]';
    private readonly CHANNEL_TITLE_SELECTOR = '[data-a="channel-title"]';

    public readonly searchInput: Locator = this.page.locator(this.SEARCH_INPUT_SELECTOR);
    public readonly channelContainers = this.page.locator(this.CHANNEL_CONTAINER_SELECTOR);

    async searchFor(query: string) {
        await this.searchInput.fill(query);
        await this.searchInput.press('Enter');
    }

    async getChannelByName(channelName: string): Promise<ChannelComponent> {
        const channelLocator = this.channelContainers
            .filter({
                has: this.page.locator(this.CHANNEL_TITLE_SELECTOR, { 
                    hasText: new RegExp(`^\\s*${channelName}\\s*$`, 'i') 
                })
            })
            .first();

        await channelLocator.waitFor({ state: 'attached', timeout: 10000 });
        await channelLocator.scrollIntoViewIfNeeded();
        await channelLocator.waitFor({ state: 'visible' });

        return new ChannelComponent(channelLocator, this.page, this.varController);
    }
}