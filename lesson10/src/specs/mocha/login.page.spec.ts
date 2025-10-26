import { expect } from 'chai';
import { LoginPage } from '../../pages/login.page';

describe('LoginPage', () => {
    let page: LoginPage;

    beforeEach(() => {
        page = new LoginPage();
    });

    it('adds three components in constructor', () => {
        const components = page.getComponents();
        expect(components).to.have.length(3);
    });

    it('renderPage renders all components', () => {
        const renders = page.renderPage();
        expect(renders).to.have.length(3);
        expect(renders[0]).to.match(/Rendering input: Username/);
        expect(renders[1]).to.match(/Rendering input: Password/);
        expect(renders[2]).to.match(/Rendering button: Login/);
    });

    it('interactWithAll returns values of interactions in order', async () => {
        const results = await page.interactWithAll();
        expect(results).to.deep.equal([
            'Finished typing \'default text\'',
            'Finished typing \'default text\'',
            'Button Login clicked!'
        ]);
    });
});
