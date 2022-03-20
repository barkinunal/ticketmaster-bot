import log from "npmlog";

export const logFunctionName = () => {};

export const verbose = (message: String) => log.verbose("", message);
export const info = (message: String) => log.info("", message);
export const warn = (message: String) => log.warn("", message);
export const error = (message: String) => log.error("", message);
