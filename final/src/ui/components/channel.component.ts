import { Locator } from '@playwright/test';
import { BaseComponent } from './base.component.ts';

export class ChannelComponent extends BaseComponent {
    private readonly VIDEO_ITEM_SELECTOR = 'a:has(img), a:has([data-a="video-duration"])';
    private readonly VIDEO_TITLE_SELECTOR = '[data-a="video-title"]';
    private readonly NEXT_BUTTON_SELECTOR = '[data-a="scroll-next"]';

    public readonly videoItems: Locator = this.root.locator(this.VIDEO_ITEM_SELECTOR);
    public readonly nextButton: Locator = this.root.locator(this.NEXT_BUTTON_SELECTOR);

    async clickVideoByIndex(index: number) {
        const targetVideo = this.videoItems.nth(index - 1);

        await this.root.scrollIntoViewIfNeeded();

        while (!(await targetVideo.isVisible())) {
            if (await this.nextButton.isHidden()) break;
            
            await this.nextButton.click();
            await this.page.waitForTimeout(1000);
        }

        await targetVideo.click();

        await this.page.waitForLoadState('domcontentloaded');
    }

    async getVideoTitleByIndex(index: number): Promise<string | null> {
        const videoCard = this.videoItems.nth(index - 1);
        const titleLocator = videoCard.locator(this.VIDEO_TITLE_SELECTOR);
        
        return await titleLocator.innerText();
    }
}