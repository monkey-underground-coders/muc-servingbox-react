import Req from "./request";

export const liveLessonsPageRequest = ({ params, token }) =>
  Req.GET({
    url: "/live/page",
    ownHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });
