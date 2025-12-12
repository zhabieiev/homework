import { IWorldOptions, World } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page } from 'playwright';
import { ConfigService } from '../services/config.service.ts';
import { SeleniumBasePage } from '../pages/base/selenium-base.page.ts';
import { DownloadsPage } from '../pages/downloads.page.ts';

export class SeleniumWorld extends World {
    public static globalContext: Map<string, unknown> = new Map<string, unknown> ();
    public scenarioContext: Map<string, unknown>;
    public static browser: Browser;
    public context: BrowserContext;
    public page: Page;

    public get browser(): Browser {
        return SeleniumWorld.browser;
    }

    public get globalContext(): Map<string, unknown> {
        return SeleniumWorld.globalContext;
    }

    // pages getters
    public get seleniumBasePage(): SeleniumBasePage {
        if (!this._seleniumBasePage) {
            this._seleniumBasePage = new SeleniumBasePage(this.page, this.configService.config.uiConfig.seleniumBaseUrl);
        }
        return this._seleniumBasePage;
    }

    public get downloadsPage(): DownloadsPage {
        if (!this._downloadsPage) {
            this._downloadsPage = new DownloadsPage(this.page, '/downloads');
        }
        return this._downloadsPage;
    }

    // service getters
    public get configService(): ConfigService {
        if (!this._configService) {
            this._configService = new ConfigService();
        }
        return this._configService;
    }

    // pages
    private _seleniumBasePage: SeleniumBasePage;
    private _downloadsPage: DownloadsPage;

    // services
    private _configService: ConfigService;

    public constructor(options: IWorldOptions) {
        super(options);
        this.scenarioContext = new Map<string, unknown>();
    }
}
