import express from "express";

import userRoutes from "./userRoutes";
import plantRoutes from "./plantRoutes";
import speciesRoutes from "./speciesRoutes";
import authRoutes from "./authRoutes";
import gardenRoutes from "./gardenRoutes";
import photoRoutes from "./photoRoutes";

import { authHandler } from "../middleware/authMiddleware";

const router = express.Router();

router.use("/auth", authRoutes);
router.use(authHandler);
router.use("/users", userRoutes);
router.use("/plants", plantRoutes);
router.use("/species", speciesRoutes);
router.use("/gardens", gardenRoutes);
router.use("/photos", photoRoutes);

export default router;
