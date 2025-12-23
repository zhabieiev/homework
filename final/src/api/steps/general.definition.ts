import { Then, DataTable } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../../support/worlds/world.ts';
import { JsonConvertor } from '../utils/converters/json.convertor.ts';
import { ObjectConvertor } from '../utils/converters/object.converter.ts';

Then('var {string} is equal to object:', async function (this: CustomWorld, varName: string, dataTable: DataTable) {
    const rawActual = this.varController.getVar(varName);
    const expected = JsonConvertor.convertMapToJson(dataTable.rowsHash(), this.varController);
    const actual = ObjectConvertor.convertObjToActualMap(rawActual, expected);
    expect(actual).toEqual(expected);
});