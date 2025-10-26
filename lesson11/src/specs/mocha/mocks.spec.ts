import { expect } from 'chai';
import sinon from 'sinon';
import { Button } from '../../components/button';
import { Input } from '../../components/input';
import { Checkbox } from '../../components/checkbox';
import { Page } from '../../pages/page';
import { LoginPage } from '../../pages/login.page';
import type { IComponent } from '../../interfaces/i-component';

class TestPage extends Page {
    public async loadPage(): Promise<void> {
        return Promise.resolve();
    }
}

describe('Mocks & Spies with sinon (Mocha)', () => {
    afterEach(() => sinon.restore());

    it('Button.click(): spies console.log and returns the final message', async () => {
        const btn = new Button('Save', '#save');
        const logSpy = sinon.spy(console, 'log');
        const res = await btn.click();
        expect(res).to.equal('Button Save clicked!');
        expect(logSpy.calledWithMatch('Clicking button Save with locator #save')).to.be.true;
        expect(logSpy.calledWithMatch('Button Save clicked!')).to.be.true;
    });

    it('Input.interact(): stubs type("default text") and verifies arguments', async () => {
        const input = new Input('Email', '#email');
        const typeStub = sinon.stub(input, 'type').resolves('Finished typing \'default text\'');
        const out = await input.interact();
        expect(out).to.equal('Finished typing \'default text\'');
        expect(typeStub.calledOnceWithExactly('default text')).to.be.true;
    });

    it('Checkbox.interact(): delegates to click() and returns stubbed value', async () => {
        const chk = new Checkbox('Accept', '#terms');
        const clickStub = sinon.stub(chk, 'click').resolves('stubbed click');
        const out = await chk.interact();
        expect(out).to.equal('stubbed click');
        expect(clickStub.calledOnce).to.be.true;
    });

    it('Page.renderPage(): uses mocked components and returns render results', () => {
        const page = new TestPage();

        const renderAStub = sinon.stub().returns('A');
        const interactAStub = sinon.stub().resolves('ia');
        const compA: IComponent = {
            render: renderAStub as unknown as () => string,
            interact: interactAStub as unknown as () => Promise<string>
        };

        const renderBStub = sinon.stub().returns('B');
        const interactBStub = sinon.stub().resolves('ib');
        const compB: IComponent = {
            render: renderBStub as unknown as () => string,
            interact: interactBStub as unknown as () => Promise<string>
        };

        expect(page.addComponent(compA)).to.equal(1);
        expect(page.addComponent(compB)).to.equal(2);

        const renders = page.renderPage();
        expect(renders).to.deep.equal(['A', 'B']);
        expect(renderAStub.calledOnce).to.be.true;
        expect(renderBStub.calledOnce).to.be.true;
    });

    it('LoginPage.loadPage(): stubs fields via getters and verifies calls', async () => {
        const page = new LoginPage();

        const username = page.usernameInput;
        const password = page.passwordInput;
        const loginBtn = page.loginButton;

        const uStub = sinon.stub(username, 'type').resolves('Finished typing \'test user\'');
        const pStub = sinon.stub(password, 'type').resolves('Finished typing \'password123\'');
        const bStub = sinon.stub(loginBtn, 'click').resolves('Button Login clicked!');
        const rStub = sinon.stub(page, 'renderPage').returns([]);

        await page.loadPage();

        expect(rStub.calledOnce).to.be.true;
        expect(uStub.calledOnceWithExactly('test user')).to.be.true;
        expect(pStub.calledOnceWithExactly('password123')).to.be.true;
        expect(bStub.calledOnce).to.be.true;
    });
});
