import mongoose from "mongoose";
const { Schema } = mongoose;

const CoffeeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    temperature: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    milk: {
      type: String,
    },
    sugar: {
      type: String,
    },
    espresso: {
      type: Number,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { strict: false }
);

export const Coffee = mongoose.model("coffees", CoffeeSchema);
