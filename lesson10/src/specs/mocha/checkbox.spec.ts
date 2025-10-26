import { expect } from 'chai';
import { Checkbox } from '../../components/checkbox';

describe('Checkbox', () => {
    it('renders with name and locator', () => {
        const c = new Checkbox('Accept', '#terms');
        const out = c.render();
        expect(out).to.equal('Rendering checkbox: Accept #terms');
    });

    it('click toggles checkbox', async () => {
        const c = new Checkbox('Accept', '#terms');
        const res = await c.click();
        expect(res).to.equal('Checkbox Accept toggled #terms');
    });

    it('interact delegates to click', async () => {
        const c = new Checkbox('Accept', '#terms');
        const res = await c.interact();
        expect(res).to.equal('Checkbox Accept toggled #terms');
    });
});
