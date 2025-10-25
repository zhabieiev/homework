import { expect } from 'chai';
import { Input } from '../../components/input';

describe('Input', () => {
    it('renders with name and locator', () => {
        const i = new Input('Username', '#username');
        const out = i.render();
        expect(out).to.equal('Rendering input: Username #username');
    });

    it('type returns finished message', async () => {
        const i = new Input('Search', '#q');
        const res = await i.type('hello');
        expect(res).to.equal('Finished typing \'hello\'');
    });

    it('interact uses default text', async () => {
        const i = new Input('Search', '#q');
        const res = await i.interact();
        expect(res).to.equal('Finished typing \'default text\'');
    });
});
