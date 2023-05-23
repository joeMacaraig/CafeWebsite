import express from "express";
import { coffeeController } from "../controllers/coffee.controllers.js";
import { Coffee } from "../models/coffee.models.js";

export const coffeeRouter = express.Router();

const { getCoffee } = coffeeController;

coffeeRouter.get("/coffee", async (req, res) => {
  const coffee = await getCoffee();
  return coffee != null
    ? res
        .status(200)
        .send({ msg: "Successfully queried coffee!", data: coffee })
    : res.status(404).send({ msg: "Error!", data: {} });
});
