import * as os from "os";

const getPlatformBasedFormat = (platform: string) => {

  switch (platform) {

    case "linux":
      return require("./NodeFormat").default;

    default:
      return require("./WinapiFormat").default;
  }
};

const platform = os.platform();

export default getPlatformBasedFormat(platform);
