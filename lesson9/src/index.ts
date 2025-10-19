import { LoginPage } from './pages/login.page';
import { Input } from './components/input';
import { Button } from './components/button';
import { DashboardPage } from './pages/dashboard.page';
import { Checkbox } from './components/checkbox';

(async() => {
    console.log('==== Start UI test ====');

    const loginPage = new LoginPage();
    loginPage.renderPage();

    const userNameInput = new Input('Username', '//input[@id=\'username\']');
    const passwordInput = new Input('Password', '//input[@id=\'password\']');
    const loginButton = new Button('Login', '//button[@id=\'loginBtn\']');

    loginPage.addComponent(userNameInput);
    loginPage.addComponent(passwordInput);
    loginPage.addComponent(loginButton);

    await userNameInput.type('test user');
    await passwordInput.type('Password_123$');
    await loginButton.click();

    console.log('---- Login test completed ----');

    const dashboardPage = new DashboardPage();
    dashboardPage.renderPage();

    const logoutButton = new Button('Logout', '//button[@id=\'logoutBtn\']');
    const acceptCheckbox = new Checkbox('Accept Terms', '//input[@id=\'acceptTerms\']');

    dashboardPage.addComponent(logoutButton);
    dashboardPage.addComponent(acceptCheckbox);

    await acceptCheckbox.click();
    await logoutButton.click();
    console.log('---- Dashboard test completed ----');

    console.log('==== End UI test ====');
})();
