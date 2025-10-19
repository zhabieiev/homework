import { Page } from './page';
import { Input } from '../components/input';
import { Button } from '../components/button';

export class LoginPage extends Page {
    public constructor() {
        super();
        this.addComponent(new Input('Username', '//input[@id=\'username\']'));
        this.addComponent(new Input('Password', '//input[@id=\'password\']'));
        this.addComponent(new Button('Login', '//button[@id=\'loginBtn\']'));
    }
}
