import IniFile from '../src/IniFile';
import { expect } from 'chai';

describe('The IniFile class', function() {
    it('should use input data', function() {
        const inputData: object = { some_json: "data" };
        const result = new IniFile(inputData);

        const parsedData = result.data;
        expect(parsedData["some_json"]).equal("data");
    });
});
