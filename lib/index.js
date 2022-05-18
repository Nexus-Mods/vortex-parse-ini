"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinapiFormat = exports.IniFile = void 0;
const IniFile_1 = require("./IniFile");
exports.IniFile = IniFile_1.default;
const IniParser_1 = require("./IniParser");
const PlatformBasedFormat_1 = require("./PlatformBasedFormat");
exports.WinapiFormat = PlatformBasedFormat_1.default;
exports.default = IniParser_1.default;
//# sourceMappingURL=index.js.map