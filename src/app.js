import "dotenv/config";
import express from "express";
import cors from "cors";

import { notFound, errorHandler } from "./middlewares.js";
import api from "./api/index.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "👋🌎🌍🌏",
  });
});

app.use("/api/v1", api);

app.use(notFound);
app.use(errorHandler);

export default app;
