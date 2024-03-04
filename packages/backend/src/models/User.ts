import { builder } from "../builder";
import { prisma } from "../db";

builder.prismaObject("User", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    messages: t.relation("messages"),
  }),
});

builder.queryField("users", (t) =>
  t.prismaField({
    type: ["User"],
    args: {
      id: t.arg.int(),
      name: t.arg.string({ required: true }),
    },
    resolve: async (query, root, args, ctx, info) => {
      if (args) {
        return prisma.user.findMany({
          where: {
            id: args.id ? args.id : undefined,
            name: args.name,
          },
        });
      }
      return prisma.user.findMany({ ...query });
    },
  })
);
