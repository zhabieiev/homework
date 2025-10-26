import { Page } from './page';
import { Button } from '../components/button';
import { Checkbox } from '../components/checkbox';

export class DashboardPage extends Page {
    private logoutButton = new Button('Logout', '//button[@id=logoutBtn]');
    private acceptCheckbox = new Checkbox('Accept Terms', '//input[@id=acceptTerms]');

    public constructor() {
        super();
        this.addComponent(this.logoutButton);
        this.addComponent(this.acceptCheckbox);
    }

    public async loadPage(): Promise<void> {
        this.renderPage();
        await this.acceptCheckbox.click();
        await this.logoutButton.click();
        console.log('---- Dashboard test completed ----');
    }
}
