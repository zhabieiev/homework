import { test, expect } from '@playwright/test';

import { ExpenseTrackerPage } from '../pages/expense-tracker.page'; 

test.describe('Expense Tracker UI Tests (POM)', () => {
    let expenseTrackerPage: ExpenseTrackerPage;

    test.beforeEach(async ({ page }) => {
        expenseTrackerPage = new ExpenseTrackerPage(page);
        await expenseTrackerPage.goto();
    });

    test('should allow adding a new expense and update balance', async () => {
        const expenseAmount = 15.50;
        const expenseText = 'Тестова витрата: Книга';

        const initialBalance = await expenseTrackerPage.getCurrentBalance();

        await expenseTrackerPage.addTransaction(expenseText, -expenseAmount);

        const newTransaction = expenseTrackerPage.getTransactionByText(expenseText);
        await expect(newTransaction).toBeVisible();
        await expect(newTransaction).toContainText(`-$${expenseAmount.toFixed(1)}`);

        const newBalance = await expenseTrackerPage.getCurrentBalance();
        const expectedNewBalance = initialBalance - expenseAmount;
        expect(newBalance).toBeCloseTo(expectedNewBalance, 2); 
    });

    test('should allow adding income and update the Income box', async () => {
        const incomeAmount = 500.00;
        const incomeText = 'Тестовий дохід: Зарплата';

        await expenseTrackerPage.addTransaction(incomeText, incomeAmount);

        await expect(expenseTrackerPage.getTransactionByText(incomeText)).toBeVisible();

        await expect(expenseTrackerPage.incomeBox).toHaveText(incomeAmount.toFixed(2));
        
        await expect(expenseTrackerPage.balanceLocator).toContainText(`$${incomeAmount.toFixed(2)}`);
    });

    test('should display initial state with zero values', async () => {
        await expect(expenseTrackerPage.balanceLocator).toHaveText('$0.00');
        await expect(expenseTrackerPage.incomeBox).toHaveText('0.00');
        await expect(expenseTrackerPage.expenseBox).toHaveText('0.00');
        
        const transactionListItems = expenseTrackerPage.transactionList.locator('li');
        await expect(transactionListItems).toHaveCount(0);
    });
});