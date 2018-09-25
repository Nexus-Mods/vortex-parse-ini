"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Promise = require("bluebird");
const winapi = require("winapi-bindings");
class WinapiFormat {
    constructor() {
    }
    read(filePath) {
        const output = {};
        return this.readSectionList(filePath)
            .then((sections) => Promise.map(sections, (section) => this.readSection(filePath, section)
            .then((content) => {
            output[section] = content;
        })))
            .then(() => Promise.resolve(output));
    }
    write(filePath, data, changes) {
        changes.removed.forEach((fullKey) => {
            const [section, key] = fullKey.split('###');
            winapi.WritePrivateProfileString(section, key, null, filePath);
        });
        [].concat(changes.added, changes.changed)
            .forEach((fullKey) => {
            const [section, key] = fullKey.split('###');
            winapi.WritePrivateProfileString(section, key, data[section][key], filePath);
        });
        return Promise.resolve();
    }
    readSectionList(filePath) {
        return Promise.resolve(winapi.GetPrivateProfileSectionNames(filePath));
    }
    readSection(filePath, section) {
        return Promise.resolve(winapi.GetPrivateProfileSection(section, filePath));
    }
}
exports.default = WinapiFormat;
//# sourceMappingURL=WinapiFormat.js.map