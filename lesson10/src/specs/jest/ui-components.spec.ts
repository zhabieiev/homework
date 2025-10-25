import { describe, it, expect } from '@jest/globals';
import { Button } from '../../components/button';
import { Input } from '../../components/input';
import { Checkbox } from '../../components/checkbox';

describe('UI components (Jest)', () => {
    describe('Button', () => {
        it('render() returns proper string', () => {
            const btn = new Button('Login', '#login');
            const out = btn.render();
            expect(out).toBe('Rendering button: Login #login');
        });

        it('click() resolves with clicked message', async () => {
            const btn = new Button('Login', '#login');
            await expect(btn.click()).resolves.toBe('Button Login clicked!');
        });

        it('interact() delegates to click()', async () => {
            const btn = new Button('LogOut', '#logout');
            await expect(btn.interact()).resolves.toBe('Button LogOut clicked!');
        });
    });

    describe('Input', () => {
        it('render() returns proper string', () => {
            const input = new Input('Username', '#username');
            const out = input.render();
            expect(out).toBe('Rendering input: Username #username');
        });

        it('type() resolves with finished message', async () => {
            const input = new Input('Password', '#password');
            await expect(input.type('password123')).resolves.toBe('Finished typing \'password123\'');
        });

        it('interact() types default text', async () => {
            const input = new Input('Search', '#q');
            await expect(input.interact()).resolves.toBe('Finished typing \'default text\'');
        });
    });

    describe('Checkbox', () => {
        it('render() returns proper string', () => {
            const chk = new Checkbox('Accept', '#terms');
            const out = chk.render();
            expect(out).toBe('Rendering checkbox: Accept #terms');
        });

        it('click() resolves with toggled message', async () => {
            const chk = new Checkbox('Accept', '#terms');
            await expect(chk.click()).resolves.toBe('Checkbox Accept toggled #terms');
        });

        it('interact() delegates to click()', async () => {
            const chk = new Checkbox('A', '#a');
            await expect(chk.interact()).resolves.toBe('Checkbox A toggled #a');
        });
    });
});
