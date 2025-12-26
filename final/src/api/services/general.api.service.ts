import { APIRequestContext, APIResponse } from 'playwright';
import { VariablesController } from '../../support/utils/variables.controller.ts';
import { StringConvertor } from '../utils/converters/string.convertor.ts';
import { MapConvertor } from '../utils/converters/map.converter.ts';
import { RequestPrefixes } from '../enumerations/request-prefixes';
import { ApiRequest } from '../models/request';
import { FileParseUtils } from '../utils/file-parse-utils.ts';
import { ClassConstructor } from 'class-transformer';

export abstract class GeneralApiService {
    protected readonly varController: VariablesController;

    constructor(varController: VariablesController) {
        this.varController = varController;
    }

    protected async readEntity<T>(response: APIResponse, cls: ClassConstructor<T>): Promise<T> {
        const json = await response.json();
        return FileParseUtils.read(json, cls);
    }

    protected async getResponse(request: ApiRequest<any>, client: APIRequestContext): Promise<APIResponse> {
        const rawPath = request.path || '';
        const resolvedUrl = StringConvertor.convertString(rawPath, this.varController);
        const options = {
            headers: this.resolveMapValues(request.headers || {}),
            params: request.queryParams,
            data: request.body
        };

        const response = await this.execute(client, request.method, resolvedUrl, options);

        if (request.statusCode && response.status() !== request.statusCode) {
            throw new Error(`Request to ${resolvedUrl} failed. Expected ${request.statusCode}, got ${response.status()}`);
        }
        return response;
    }

    private async sendRequestWithTable(client: APIRequestContext, method: string, url: string, table: Record<string, string>): Promise<APIResponse> {
        const resolvedUrl = StringConvertor.convertString(url, this.varController);
        
        const headers = MapConvertor.convertMapKeysWithPrefix(table, [RequestPrefixes.HEADERS]);
        const queryParams = MapConvertor.convertMapKeysWithPrefix(table, [RequestPrefixes.QUERY]);
        const bodyMap = MapConvertor.convertMapKeysWithPrefix(table, [RequestPrefixes.BODY]);

        const options = {
            headers: this.resolveMapValues(headers),
            params: this.resolveMapValues(queryParams),
            data: bodyMap
        };

        return this.execute(client, method, resolvedUrl, options);
    }

    public async post(client: APIRequestContext, url: string, table: Record<string, string>) { 
        return this.sendRequestWithTable(client, 'POST', url, table); 
    }
    
    public async get(client: APIRequestContext, url: string, table: Record<string, string>) { 
        return this.sendRequestWithTable(client, 'GET', url, table); 
    }

    protected async execute(client: APIRequestContext, method: string, url: string, options: any): Promise<APIResponse> {
        const upperMethod = method.toUpperCase();
        switch (upperMethod) {
            case 'POST': return await client.post(url, options);
            case 'PUT': return await client.put(url, options);
            case 'DELETE': return await client.delete(url, options);
            case 'PATCH': return await client.patch(url, options);
            default: return await client.get(url, options);
        }
    }
    protected resolveMapValues(map: Record<string, string>): Record<string, string> {
        if (!map) return {};
        const res: Record<string, string> = {};
        Object.entries(map).forEach(([k, v]) => {
            res[k] = StringConvertor.convertString(v, this.varController);
        });
        return res;
    }
}