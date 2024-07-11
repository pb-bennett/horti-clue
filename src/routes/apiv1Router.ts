import express from "express";

import userRoutes from "./userRoutes";
import plantRoutes from "./plantRoutes";
import speciesRoutes from "./speciesRoutes";
import authRoutes from "./authRoutes";

import { authHandler } from "../middleware/authMiddleware";

const router = express.Router();

router.use("/users", authHandler, userRoutes);
router.use("/plants", authHandler, plantRoutes);
router.use("/species", authHandler, speciesRoutes);
router.use("/auth", authRoutes);

export default router;
