import { Page } from './page';
import { Input } from '../components/input';
import { Button } from '../components/button';

export class LoginPage extends Page {
    public usernameInput = new Input('Username', '//input[@id=\'username\']');
    public passwordInput = new Input('Password', '//input[@id=\'password\']');
    public loginButton = new Button('Login', '//button[@id=\'loginBtn\']');

    public constructor() {
        super();
        this.addComponent(this.usernameInput);
        this.addComponent(this.passwordInput);
        this.addComponent(this.loginButton);
    }

    public async loadPage(): Promise<void> {
        this.renderPage();
        await this.usernameInput.type('test user');
        await this.passwordInput.type('password123');
        await this.loginButton.click();
        console.log('---- Login test completed ----');
    }
}
