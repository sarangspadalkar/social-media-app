import { builder } from '../builder';

builder.prismaObject('Message', {
  fields: (t) => ({
    id: t.exposeInt('id'),
    body: t.exposeString('body'),
    createdAt: t.expose('createdAt', {
      type: 'DateTime'
    })
  })
});
