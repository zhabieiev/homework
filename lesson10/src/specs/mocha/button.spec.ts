import { expect } from 'chai';
import { Button } from '../../components/button';

describe('Button', () => {
    it('renders with name and locator', () => {
        const b = new Button('Submit', '#submit');
        const out = b.render();
        expect(out).to.include('Rendering button: Submit #submit');
    });

    it('click returns expected messages', async () => {
        const b = new Button('Submit', '#submit');
        const res = await b.click();
        expect(res).to.equal('Button Submit clicked!');
    });

    it('interact delegates to click', async () => {
        const b = new Button('X', '#x');
        const res = await b.interact();
        expect(res).to.equal('Button X clicked!');
    });
});
