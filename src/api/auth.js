import Req from "./request";

export const getTokens = (string) =>
  Req.POST({
    url: `/auth/convert`,
    ownHeaders: {
      Authorization: `Basic ${string}`,
    },
  });

export const getAccess = (token) =>
  Req.POST({
    url: `/auth/get_access`,
    data: {
      refreshToken: token,
    },
  });

export const getUser = () =>
  Req.GET({
    url: `/auth/user`,
  });
