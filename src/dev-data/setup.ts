import mongoose from "mongoose";
import dotenv from "dotenv";
import util from "util";
import { readFileSync } from "fs";
import UserModel from "../models/User"; // Adjust path to your User model
import GardenModel from "../models/Garden"; // Adjust path to your Garden model
import SpeciesModel from "../models/Species"; // Adjust path to your Species model
import PlantModel from "../models/Plant"; // Adjust path to your Plant model
import PhotoModel from "../models/Photo"; // Adjust path to your Photo model

dotenv.config();

const dbUri = process.env.DB_URI?.replace(
  "<PASSWORD>",
  process.env.DB_PW as string
);

const loadData = async () => {
  try {
    await mongoose.connect(dbUri!);
    console.log("Database connected!");

    const users = JSON.parse(
      readFileSync("./dist/dev-data/users.json", "utf-8")
    );
    const gardens = JSON.parse(
      readFileSync("./dist/dev-data/gardens.json", "utf-8")
    );
    const species = JSON.parse(
      readFileSync("./dist/dev-data/species.json", "utf-8")
    );
    const plants = JSON.parse(
      readFileSync("./dist/dev-data/plants.json", "utf-8")
    );
    const photos = JSON.parse(
      readFileSync("./dist/dev-data/photos.json", "utf-8")
    );
    // console.log(util.inspect(gardens, { depth: null, colors: true }));

    await UserModel.deleteMany({}),
      await GardenModel.deleteMany({}),
      await SpeciesModel.deleteMany({}),
      await PlantModel.deleteMany({}),
      await PhotoModel.deleteMany({}),
      await UserModel.insertMany(users),
      await GardenModel.insertMany(gardens),
      await SpeciesModel.insertMany(species),
      await PlantModel.insertMany(plants),
      await PhotoModel.insertMany(photos),
      console.log("Data successfully loaded!");
  } catch (error) {
    console.error("Error loading data:", error);
  } finally {
    await mongoose.connection.close();
    console.log("Database connection closed.");
  }
};

loadData();
