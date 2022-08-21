import express from "express";
import { engine } from "express-handlebars";
import cors from "cors";

import favicon from "static-favicon";
import logger from "morgan";

import "dotenv/config"; // this weird
//dotenv.config("./env");

import conn from "./db/connection.js";
import restaurant from "./routes/restaurant.js";

const app = express();

app.use(cors());
app.use(express.json());

// view engine setup
app.use(express.static("public"));

app.engine("hbs", engine());
app.set("view engine", "hbs");
app.set("views", "/views");

app.use(favicon());
app.use(logger("dev"));

const port = process.env.PORT || 3001;

app.use("/", restaurant);

conn
  .then((db) => {
    if (!db) {
      process.exit();
    } else {
      app.listen(port, () => console.log(`APP LISTENING ON ${port}.`));
      app.on("error", (err) =>
        console.log(`Failed to connect to HTTP Server. ${err}`)
      );
    }
  })
  .catch((err) => {
    console.log(`Connection Failed. ${err}`);
  });
