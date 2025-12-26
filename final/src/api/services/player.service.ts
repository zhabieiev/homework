import { APIRequestContext } from 'playwright';
import { GeneralApiService } from './general.api.service.ts';
import { HttpStatus } from '../utils/сonstants.ts';
import { ApiRequest } from '../models/request.ts';
import { VariablesController } from '../../support/utils/variables.controller.ts';

import { MultiPlaylistRequestV3 } from '../../../generatedModels/models/MultiPlaylistRequestV3.ts';
import { MultiPlaylistPlayerResponse } from '../../../generatedModels/models/MultiPlaylistPlayerResponse.ts';
import { PlaylistRequestV2 } from '../../../generatedModels/models/PlaylistRequestV2.ts';
import { PlaylistResponse } from '../../../generatedModels/models/PlaylistResponse.ts';

export class TmPlaylistService extends GeneralApiService {
    private readonly client: APIRequestContext;
    private readonly PLAYER_GET_REQUEST = 'v2/player/getRequest';
    private readonly PLAYER_MULTIPLAYLISTS = 'v2/player/multiplaylists';

    constructor(client: APIRequestContext, varController: VariablesController) {
        super(varController);
        this.client = client;
    }

     public async readRequest(body: PlaylistRequestV2, statusCode: number = HttpStatus.OK): Promise<PlaylistResponse> {
        const request = ApiRequest.request<PlaylistRequestV2>()
            .method('POST')
            .path(this.PLAYER_GET_REQUEST) 
            .body(body)
            .statusCode(statusCode)
            .build();

        const response = await this.getResponse(request, this.client);
        return this.readEntity(response, PlaylistResponse);
    }

    public async readMultiplaylist(body: MultiPlaylistRequestV3, statusCode: number = HttpStatus.OK): Promise<MultiPlaylistPlayerResponse> {
        const request = ApiRequest.request<MultiPlaylistRequestV3>()
            .method('POST')
            .path(this.PLAYER_MULTIPLAYLISTS)
            .body(body)
            .statusCode(statusCode)
            .build();

        const response = await this.getResponse(request, this.client);
        return this.readEntity(response, MultiPlaylistPlayerResponse);
    }
}