import Req from "./request";

export const getTokens = (string) =>
  Req.POST({
    url: `/auth/convert`,
    ownHeaders: {
      Authorization: `Basic ${string}`,
    },
  });
