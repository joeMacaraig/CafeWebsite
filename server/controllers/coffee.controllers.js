import dotenv from "dotenv";
import { Coffee } from "../models/coffee.models.js";



//dotenv for the database
dotenv.config();

//C R U D
export const coffeeController = {
    //grabs all the coffee from db
    getCoffee: async () => {
        const coffeeCollection = Coffee;
        try {
            const inventory = await coffeeCollection.find({});
            return inventory != null ? inventory : [];
        } catch (e) {
            console.log(e);
            return [];
        }
    }, 
    //adds a coffee with the given model to the db
    
    //updates a coffee with user input to the db

    //deletes a coffee from the db

}