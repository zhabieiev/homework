import { Page } from './page';
import { Button } from '../components/button';
import { Checkbox } from '../components/checkbox';

export class DashboardPage extends Page {
    public constructor() {
        super();
        this.addComponent(new Button('Logout', '//button[@id=logoutBtn]'));
        this.addComponent(new Checkbox('Accept Terms', '//input[@id=acceptTerms]'));
    }
}
