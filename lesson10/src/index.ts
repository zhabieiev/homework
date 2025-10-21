import { LoginPage } from './pages/login.page';
import { DashboardPage } from './pages/dashboard.page';

(async () => {
    console.log('==== Start UI test ====');

    const loginPage = new LoginPage();
    await loginPage.loadPage();

    const dashboardPage = new DashboardPage();
    await dashboardPage.loadPage();

    console.log('==== End UI test ====');
})();
