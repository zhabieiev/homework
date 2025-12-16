import { expect, type Locator, type Page } from '@playwright/test';

export class ExpenseTrackerPage {
    readonly page: Page;
    readonly container: Locator;
    readonly balanceLocator: Locator;
    readonly incomeBox: Locator;
    readonly expenseBox: Locator;
    readonly transactionDescriptionInput: Locator;
    readonly transactionAmountInput: Locator;
    readonly addTransactionButton: Locator;
    readonly transactionList: Locator;

    constructor(page: Page) {
        this.page = page;
        this.container = page.locator('.container');
        this.balanceLocator = page.locator('#balance');
        this.incomeBox = page.locator('.inc-exp-container .money.plus');
        this.expenseBox = page.locator('.inc-exp-container .money.minus');
        this.transactionDescriptionInput = page.locator('#description');
        this.transactionAmountInput = page.locator('#transactionamount');
        this.addTransactionButton = page.getByRole('button', { name: 'Add Transaction' });
        this.transactionList = page.locator('.list');
    }

    async goto() {
        await this.page.goto('/');
        await expect(this.container).toBeVisible();
    }

    async addTransaction(description: string, amount: number) {
        await this.transactionDescriptionInput.fill(description);
        await this.transactionAmountInput.fill(amount.toString());
        await this.addTransactionButton.click();
    }
    
    async getCurrentBalance(): Promise<number> {
        const balanceText = await this.balanceLocator.innerText();
        return parseFloat(balanceText.replace(/[$,]/g, ''));
    }

    getTransactionByText(text: string): Locator {
        return this.transactionList.locator('li', { hasText: text });
    }
}