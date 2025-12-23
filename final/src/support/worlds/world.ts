import { World, IWorldOptions, setWorldConstructor } from '@cucumber/cucumber';
import { APIRequestContext, APIResponse, Page, Browser, BrowserContext } from '@playwright/test';
import { TmPlaylistService } from '../../api/services/player.service.ts';
import { VariablesController } from '../../api/utils/controllers/variables.controller.ts';
import { setDefaultTimeout } from '@cucumber/cucumber';

export interface TmWorld extends World {

    browser: Browser;
    context: BrowserContext;
    page: Page;

    apiRequest: APIRequestContext;
    apiResponse: APIResponse;

    varController: VariablesController;
    playlistService: TmPlaylistService;
}

export class CustomWorld extends World implements TmWorld {
    public browser!: Browser;
    public context!: BrowserContext;
    public page!: Page;

    public apiRequest!: APIRequestContext;
    public apiResponse!: APIResponse;

    public varController: VariablesController;
    public playlistService!: TmPlaylistService; 

    constructor(options: IWorldOptions) {
        super(options);
        
        this.varController = new VariablesController();
    }
}

setWorldConstructor(CustomWorld);
setDefaultTimeout(30 * 1000);