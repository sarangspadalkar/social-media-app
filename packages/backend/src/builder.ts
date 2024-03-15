import SchemaBuilder from '@pothos/core';
import PrismaPlugin from '@pothos/plugin-prisma';
import type PrismaTypes from '@pothos/plugin-prisma/generated';
import { DateTimeISOResolver, EmailAddressResolver } from 'graphql-scalars';
import { prisma } from './db';

export const builder = new SchemaBuilder<{
  Scalars: {
    Date: { Input: Date; Output: Date };
    Email: { Input: string; Output: string };
  };
  PrismaTypes: PrismaTypes;
}>({
  plugins: [PrismaPlugin],
  prisma: {
    client: prisma
  }
});

builder.addScalarType('Date', DateTimeISOResolver, {});

export const emailScalar = builder.addScalarType(
  'Email',
  EmailAddressResolver,
  {}
);

export const stringInput = builder.inputType('StringInput', {
  fields: (t) => ({
    ne: t.string(),
    eq: t.string(),
    le: t.string(),
    lt: t.string(),
    ge: t.string(),
    gt: t.string(),
    in: t.stringList(),
    contains: t.string(),
    not_contains: t.string(),
    like: t.string(),
    not_like: t.string(),
    startsWith: t.string(),
    endsWith: t.string()
  })
});

export const intInput = builder.inputType('IntInput', {
  fields: (t) => ({
    ne: t.int(),
    eq: t.int(),
    le: t.int(),
    lt: t.int(),
    ge: t.int(),
    gt: t.int(),
    in: t.intList()
  })
});

builder.queryType({});
