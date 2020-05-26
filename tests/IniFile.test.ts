import IniFile from '../src/IniFile';
import { expect } from 'chai';

describe('The IniFile class', function() {
    it('should parse JSON', function() {
        let inputData: String = "{\"some_json\":\"data\"}";
        let result = new IniFile(inputData);
        expect(result).equal(7);
    });
});
