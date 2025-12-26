import { Locator, expect, Page } from '@playwright/test';
import { BaseComponent } from './base.component.ts';

export class DeepSearchComponent extends BaseComponent {
    private readonly TAB_SELECTOR = '[role="tab"]';
    private readonly TAB_CONTENT_SELECTOR = 'div[class*="_TabContent"]';
    private readonly TIMESTAMP_SELECTOR = '.MuiTypography-root:has-text(":")';

    public readonly tabs: Locator;

    constructor(root: Locator, page: Page) {
        super(root, page);
        this.tabs = this.root.locator(this.TAB_SELECTOR);
    }

    async openTab(tabName: string) {
        const targetTab = this.tabs.filter({ hasText: tabName });
        await targetTab.click();
        await expect(targetTab).toHaveAttribute('aria-selected', 'true', { timeout: 15000 });
        
        const activePanel = this.root.locator(this.TAB_CONTENT_SELECTOR).filter({ visible: true });
        await activePanel.locator(this.TIMESTAMP_SELECTOR).first().waitFor({ state: 'visible', timeout: 10000 });
    }

    get activeTimestamps(): Locator {
        return this.root
            .locator(this.TAB_CONTENT_SELECTOR)
            .filter({ visible: true })
            .locator(this.TIMESTAMP_SELECTOR);
    }
}