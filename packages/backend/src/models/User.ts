import { builder, emailScalar } from "../builder";
import { prisma } from "../db";

builder.prismaObject("User", {
  fields: (t) => ({
    id: t.exposeInt("id"),
    name: t.exposeString("name"),
    userName: t.exposeString("userName"),
    email: t.expose("email", {
      type: "Email",
    }),
    messages: t.relation("messages"),
    comments: t.relation("comments"),
    posts: t.relation("posts"),
  }),
});

builder.queryField("users", (t) =>
  t.prismaField({
    type: ["User"],
    args: {
      id: t.arg.int(),
      name: t.arg.string({ required: true }),
      email: t.arg({
        type: emailScalar,
        required: true,
      }),
    },
    resolve: async (query, root, args, ctx, info) => {
      if (args) {
        return prisma.user.findMany({
          where: {
            id: args.id ? args.id : undefined,
            name: args.name,
            email: args.email,
          },
        });
      }
      return prisma.user.findMany({ ...query });
    },
  })
);
