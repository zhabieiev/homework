import { World, IWorldOptions, setWorldConstructor, setDefaultTimeout } from '@cucumber/cucumber';
import { APIRequestContext, APIResponse, Page, Browser, BrowserContext } from '@playwright/test';

import { VariablesController } from '../utils/variables.controller.ts';

import { MainPage } from '../../ui/pages/main.page.ts';
import { VideoPage } from '../../ui/pages/video.page.ts';
import { SearchResultsPage } from '../../ui/pages/search-results.page.ts';

export class CustomWorld extends World {
    public browser!: Browser;
    public context!: BrowserContext;
    public page!: Page;

    public apiRequest!: APIRequestContext;
    public apiResponse!: APIResponse;

    public varController: VariablesController;
    public playlistService!: any; 

    private _mainPage?: MainPage;
    private _videoPage?: VideoPage;
    private _searchResultsPage?: SearchResultsPage;

    constructor(options: IWorldOptions) {
        super(options);
        this.varController = new VariablesController();
    }

    async initApiServices() {
        const { TmPlaylistService } = await import('../../api/services/player.service.ts');
        this.playlistService = new TmPlaylistService(this.apiRequest, this.varController);
    }

    get mainPage(): MainPage {
        if (!this._mainPage) {
            this._mainPage = new MainPage(this.page, this.varController);
        }
        return this._mainPage;
    }

    get videoPage(): VideoPage {
        if (!this._videoPage) {
            this._videoPage = new VideoPage(this.page, this.varController);
        }
        return this._videoPage;
    }

    get searchResultsPage(): SearchResultsPage {
        if (!this._searchResultsPage) {
            this._searchResultsPage = new SearchResultsPage(this.page, this.varController);
        }
        return this._searchResultsPage;
    }
}

setWorldConstructor(CustomWorld);
setDefaultTimeout(30 * 1000);