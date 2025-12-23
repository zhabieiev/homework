import { request, APIRequestContext } from 'playwright';

export class ClientController {
    public static async getClient(baseUrl: string): Promise<APIRequestContext> {
        return await request.newContext({
            baseURL: baseUrl,
            extraHTTPHeaders: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });
    }
}