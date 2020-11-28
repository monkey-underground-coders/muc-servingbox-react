import axios from "axios";

const BASE_URL = "http://95.216.137.74:8080/muc-servingbox-spring/";
const METHODS = ["GET", "DELETE", "HEAD", "POST", "PUT", "PATCH"];

const sidedRequest = (opts) => {
  const { ownHeaders, ...restOpts } = opts;

  const headers = {
    "Content-Type": "application/json",
    ...ownHeaders,
  };

  return axios({ baseURL: BASE_URL, headers, ...restOpts });
};

export const externalRequest = (externalUrl, opts) =>
  axios({ url: externalUrl, ...opts });

const request = METHODS.reduce((req, method) => {
  req[method] = (opts) => sidedRequest({ ...opts, method });
  return req;
}, {});

export default request;
