import { builder } from "../builder";

builder.prismaObject("Post", {
  fields: (t) => ({
    id: t.exposeInt("id"),
    body: t.exposeString("body"),
    likes: t.exposeInt("likes"),
    author: t.relation("author"),
    comments: t.relation("comments"),
    createdAt: t.expose("createdAt", {
      type: "Date",
    }),
  }),
});
