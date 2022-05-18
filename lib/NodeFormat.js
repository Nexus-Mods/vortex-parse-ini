"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const ini = require("ini");
const Promise = require("bluebird");
class NodeFormat {
    constructor() {
    }
    read(filePath) {
        const output = {};
        return this.readSections(filePath);
    }
    write(filePath, data, changes) {
        try {
            fs.writeFileSync(filePath, ini.stringify(data));
            return Promise.resolve();
        }
        catch (err) {
            return Promise.reject(err);
        }
    }
    readSections(filePath) {
        return Promise.resolve(ini.parse(fs.readFileSync(filePath, 'utf-8')));
    }
}
exports.default = NodeFormat;
//# sourceMappingURL=NodeFormat.js.map