// import dotenv from "dotenv";
import express, { Request, Response } from "express";
import morgan from "morgan";

import logger from "./utils/logger";

import userRoutes from "./routes/userRoutes";
import plantRoutes from "./routes/plantRoutes";
import speciesRoutes from "./routes/speciesRoutes";

// dotenv.config();
const app = express();
// const port: string = process.env.PORT || "3000";

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/plants", plantRoutes);
app.use("/api/v1/species", speciesRoutes);

// app.listen(port, () => console.log(`Listening on port ${port}`));

export default app;
