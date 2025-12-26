import { ClassConstructor } from 'class-transformer';
import { JsonConvertor } from './converters/json.convertor.ts';
import { FileParseUtils } from './file-parse-utils.ts';
import { VariablesController } from '../../support/utils/variables.controller.ts';

export class Populator {
    public static populate<T>(
        map: Record<string, string>, 
        cls: ClassConstructor<T>, 
        varController?: VariablesController
    ): T {
        const rawObject = JsonConvertor.convertMapToJson(map, varController);
        return FileParseUtils.read(rawObject, cls);
    }
}

export const populate = Populator.populate;