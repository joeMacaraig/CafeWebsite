import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

//import routes
import { coffeeRouter } from "./routes/coffee.routes.js";

dotenv.config();

//dotenv items
const PORT = process.env.PORT;
const DB_PORT = process.env.DB_PORT;

const app = express();

//middleware
app.use(cors());
app.use(bodyParser.json({ limit: "4000kb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "4000kb", extended: true }));

//routes
app.use(coffeeRouter);

//database connection
mongoose
  .set("strictQuery", false)
  .connect(DB_PORT, { useNewUrlParser: true, dbName: "joezcoffee",  })
  .then(() =>
    app.listen(PORT, () => console.log(`SERVER RUNNING ON PORT ${PORT} 🚀`))
  )
  .catch((error) => console.log(error));
