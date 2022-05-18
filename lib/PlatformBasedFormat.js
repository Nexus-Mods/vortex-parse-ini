"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const os = require("os");
const getPlatformBasedFormat = (platform) => {
    switch (platform) {
        case "linux":
            return require("./NodeFormat").default;
        default:
            return require("./WinapiFormat").default;
    }
};
const platform = os.platform();
exports.default = getPlatformBasedFormat(platform);
//# sourceMappingURL=PlatformBasedFormat.js.map