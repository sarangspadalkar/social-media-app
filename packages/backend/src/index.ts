import { log } from "@augment-vir/node-js";
import { createYoga } from "graphql-yoga";
import { createServer } from "node:http";
import { schema } from "./schema";

const port = Number(process.env.API_PORT) || 4000;

const yoga = createYoga({ schema });
const server = createServer(yoga);

server.listen(port, () => {
  log.success(`Server is running on http://localhost:${port}/graphql`);
});
