import dotenv from "dotenv";
import mongoose from "mongoose";

import app from "./app";

dotenv.config();
const port: string = process.env.PORT || "3000";

if (!process.env.DB_URI) {
  console.error("Error: DB_URI is not defined in environment variables.");
  process.exit(1);
}
if (!process.env.DB_PW) {
  console.error("Error: DB_PW is not defined in environment variables.");
  process.exit(1);
}

const dbUri: string = process.env.DB_URI.replace(
  "<PASSWORD>",
  process.env.DB_PW
);

mongoose
  .connect(dbUri)
  .then(() => {
    console.log("Connected to database successfully");
    app.listen(port, () => console.log(`Listening on port ${port}`));
  })
  .catch((error) => {
    console.error("Connection to database failed", error);
    throw error;
  });
