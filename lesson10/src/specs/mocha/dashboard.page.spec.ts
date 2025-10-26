import { expect } from 'chai';
import { DashboardPage } from '../../pages/dashboard.page';

describe('DashboardPage', () => {
    let page: DashboardPage;

    beforeEach(() => {
        page = new DashboardPage();
    });

    it('has two components', () => {
        const components = page.getComponents();
        expect(components).to.have.length(2);
    });

    it('renderPage renders both components', () => {
        const renders = page.renderPage();
        expect(renders).to.have.length(2);
        expect(renders[0]).to.match(/Rendering button: Logout/);
        expect(renders[1]).to.match(/Rendering checkbox: Accept Terms/);
    });

    it('interactWithAll interacts with both components', async () => {
        const results = await page.interactWithAll();
        expect(results).to.deep.equal([
            'Button Logout clicked!',
            'Checkbox Accept Terms toggled //input[@id=acceptTerms]'
        ]);
    });
});
