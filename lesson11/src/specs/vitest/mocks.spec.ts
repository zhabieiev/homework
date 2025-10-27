import { describe, it, expect, vi, afterEach } from 'vitest';
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

describe('Mocks & Spies with vi (Vitest)', () => {
    afterEach(() => {
        vi.restoreAllMocks();
        vi.unstubAllEnvs?.();
        vi.clearAllMocks();
        vi.useRealTimers();
    });

    it('should spy on Page.renderPage being called once', async () => {
        const page = new LoginPage();
        const spy = vi.spyOn(page, 'renderPage');
        await page.loadPage();
        expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should stub username/password typing with exact args', async () => {
        const page = new LoginPage();
        const username = page.usernameInput;
        const password = page.passwordInput;
        const loginBtn = page.loginButton;

        const uStub = vi.spyOn(username, 'type').mockResolvedValue('Finished typing \'test user\'');
        const pStub = vi.spyOn(password, 'type').mockResolvedValue('Finished typing \'password123\'');
        const bStub = vi.spyOn(loginBtn, 'click').mockResolvedValue('Button Login clicked!');
        const rStub = vi.spyOn(page, 'renderPage').mockReturnValue([]);

        await page.loadPage();

        expect(rStub).toHaveBeenCalledTimes(1);
        expect(uStub).toHaveBeenCalledWith('test user');
        expect(pStub).toHaveBeenCalledWith('password123');
        expect(bStub).toHaveBeenCalledTimes(1);
    });

    it('renderPage should call render on each component and return strings', () => {
        const page = new TestPage();
        const a: IComponent = new Button('A', '//a');
        const b: IComponent = new Input('B', '//b');
        const c: IComponent = new Checkbox('C', '//c');

        const aRender = vi.spyOn(a, 'render').mockReturnValue('ra');
        const bRender = vi.spyOn(b, 'render').mockReturnValue('rb');
        const cRender = vi.spyOn(c, 'render').mockReturnValue('rc');

        page.addComponent(a);
        page.addComponent(b);
        page.addComponent(c);

        const res = page.renderPage();
        expect(res).toEqual(['ra', 'rb', 'rc']);
        expect(aRender).toHaveBeenCalledTimes(1);
        expect(bRender).toHaveBeenCalledTimes(1);
        expect(cRender).toHaveBeenCalledTimes(1);
    });

    it('interactWithAll should await each component and collect results', async () => {
        const page = new TestPage();
        const a: IComponent = new Button('A', '//a');
        const b: IComponent = new Input('B', '//b');

        vi.spyOn(a, 'interact').mockResolvedValue('clicked A');
        vi.spyOn(b, 'interact').mockResolvedValue('typed B');

        page.addComponent(a);
        page.addComponent(b);

        const res = await page.interactWithAll();
        expect(res).toEqual(['clicked A', 'typed B']);
    });

    it('simulateDelay should be fast-forwardable with fake timers', async () => {
        vi.useFakeTimers();
        const input = new Input('Username', '//input');
        const typeSpy = vi.spyOn<any, any>(input as any, 'simulateDelay'); // private-protected call through method

        const p = input.type('hello');
        // Fast-forward timers to resolve internal setTimeout(5)
        await vi.runAllTimersAsync();
        await p;

        expect(typeSpy).toHaveBeenCalledTimes(1);
    });

    it('addComponent should return incremented length', () => {
        const page = new TestPage();
        const len1 = page.addComponent(new Button('X', '//x'));
        const len2 = page.addComponent(new Input('Y', '//y'));
        expect(len1).toBe(1);
        expect(len2).toBe(2);
        expect(page.getComponents().length).toBe(2);
    });
});
