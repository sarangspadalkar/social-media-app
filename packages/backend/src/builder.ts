import SchemaBuilder from "@pothos/core";
import PrismaPlugin from "@pothos/plugin-prisma";
import type PrismaTypes from "@pothos/plugin-prisma/generated";
import { DateTimeISOResolver, EmailAddressResolver } from "graphql-scalars";
import { prisma } from "./db";

export const builder = new SchemaBuilder<{
  Scalars: {
    Date: { Input: Date; Output: Date };
    Email: { Input: string; Output: string };
  };
  PrismaTypes: PrismaTypes;
}>({
  plugins: [PrismaPlugin],
  prisma: {
    client: prisma,
  },
});

builder.addScalarType("Date", DateTimeISOResolver, {});
export const emailScalar = builder.addScalarType(
  "Email",
  EmailAddressResolver,
  {}
);
builder.queryType({});
