import axios from "axios";
import * as logger from "./logUtils";

export const get = async (url: string) => {
  logger.verbose(`getRequest is called. Requested url: ${url}`);

  try {
    const response = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "sec-ch-ua-platform": "macOS",
      },
      withCredentials: true,
    });
    logger.info(`Request to ${url} was succeded`);
    return response;
  } catch (error) {
    // logger.warn(error);
    logger.warn(`Request returned with the code: ${error.response.status}`);
    return error.response.status;
  }
};
