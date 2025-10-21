import { Page } from './page';
import { Input } from '../components/input';
import { Button } from '../components/button';

export class LoginPage extends Page {
    private usernameInput = new Input('Username', '//input[@id=\'username\']');
    private passwordInput = new Input('Password', '//input[@id=\'password\']');
    private loginButton = new Button('Login', '//button[@id=\'loginBtn\']');

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
