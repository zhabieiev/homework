import { Before, ITestCaseHookParameter } from '@cucumber/cucumber';
import { request } from '@playwright/test';
import { CustomWorld } from '../worlds/world.ts';
import { TmPlaylistService } from '../../api/services/player.service.ts';
import { PropertyLoader } from '../../api/utils/property-loader.ts';

const ENVS = {
    dev: 'http://ac-dev-trafficmanager-internal.dev-anyclip.com:8080/trafficmanager/api/',
    qa: 'http://ac-qa-trafficmanager-internal.qa-anyclip.com:8080/trafficmanager/api/'
} as const;

let lastScenarioName: string | undefined;

Before({ tags: "@api" }, async function (this: CustomWorld, scenario: ITestCaseHookParameter) {
    const env = (process.env.ENV || 'dev').toLowerCase() as keyof typeof ENVS;
    const baseUrl = ENVS[env];

    const currentScenarioName = scenario.pickle.name;
    
    if (currentScenarioName !== lastScenarioName) {
        console.log(`\n🚀 Scenario: ${currentScenarioName}`);
        lastScenarioName = currentScenarioName;
    }

    this.apiRequest = await request.newContext({
        baseURL: baseUrl,
        extraHTTPHeaders: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
        }
    });

    PropertyLoader.loadEnvProperties(this.varController);

    this.playlistService = new TmPlaylistService(this.apiRequest, this.varController);
});