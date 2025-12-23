import { When, DataTable } from '@cucumber/cucumber';
import { CustomWorld } from '../../support/worlds/world.ts';
import { populate } from '../utils/populator.ts';

import { MultiPlaylistRequestV3 } from '../../../generatedModels/models/MultiPlaylistRequestV3.ts';
import { PlaylistRequestV2 } from '../../../generatedModels/models/PlaylistRequestV2.ts';

When('tm api user reads player multiplaylist to {string}:', async function (this: CustomWorld, varName: string, dataTable: DataTable) {
    const body = populate(dataTable.rowsHash(), MultiPlaylistRequestV3, this.varController);
    const response = await this.playlistService.readMultiplaylist(body);
    this.varController.saveVar(varName, response);
});

When('tm api user reads player request to {string}:', async function (this: CustomWorld, varName: string, dataTable: DataTable) {
    const body = populate(dataTable.rowsHash(), PlaylistRequestV2, this.varController);
    const response = await this.playlistService.readRequest(body);
    this.varController.saveVar(varName, response);
});