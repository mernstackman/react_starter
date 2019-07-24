import express from "express";
import bodyParser from "body-parser";
import path from "path";
import cors from "cors";
import config from "../config";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: config.CLIENT_ORIGIN }));

// Let the things inside frontend folder loadable from browser under public path
app.use("/public", express.static(path.join(__dirname, "frontend")));

// No matter what browser ask, return the content
app.get("*", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "./index.html"));
});

export default app;
