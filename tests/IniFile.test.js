"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IniFile_1 = require("../src/IniFile");
var chai_1 = require("chai");
describe('The IniFile class', function () {
    it('should parse JSON', function () {
        var inputData = "{\"some_json\":\"data\"}";
        var result = new IniFile_1.default(inputData);
        chai_1.expect(result).equal(7);
    });
});
