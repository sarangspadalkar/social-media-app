// src/index.ts
import { log } from "@augment-vir/node-js";
import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, TypeScript with Express!");
});

app.listen(port, () => {
  log.success(`Server is running at http://localhost:${port}`);
});
