import Req from "./request";

export const liveLessonsPageRequest = (params) =>
  Req.GET({
    url: "/live/page",
  });
