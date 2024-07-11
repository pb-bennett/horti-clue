// import dotenv from "dotenv";
import express, { Request, Response } from "express";
import morgan from "morgan";

import logger from "./utils/logger";
import { loggerMiddleware } from "./middleware/loggerMiddleware";
import { ErrorHandlingMiddleware } from "./middleware/errorHandlingMiddleware";
// import { authHandler } from "./middleware/authMiddleware";

// import userRoutes from "./routes/userRoutes";
// import plantRoutes from "./routes/plantRoutes";
// import speciesRoutes from "./routes/speciesRoutes";
// import authRoutes from "./routes/authRoutes";

import apiv1Router from "./routes/apiv1Router";

// dotenv.config();
const app = express();
// const port: string = process.env.PORT || "3000";

app.use(express.json());
// app.use(authHandler);
app.use(morgan("dev"));
app.use(loggerMiddleware);

app.use("/api/v1", apiv1Router);
// app.use("/api/v1/users", userRoutes);
// app.use("/api/v1/plants", plantRoutes);
// app.use("/api/v1/species", speciesRoutes);
// app.use("/api/v1/auth", authRoutes);

app.use(ErrorHandlingMiddleware);
// app.listen(port, () => console.log(`Listening on port ${port}`));

export default app;
