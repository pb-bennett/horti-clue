import express from "express";

import userRoutes from "./userRoutes";
import plantRoutes from "./plantRoutes";
import speciesRoutes from "./speciesRoutes";
import authRoutes from "./authRoutes";

import { authHandler } from "../middleware/authMiddleware";

const router = express.Router();

router.use("/auth", authRoutes);
router.use(authHandler);
router.use("/users", userRoutes);
router.use("/plants", plantRoutes);
router.use("/species", speciesRoutes);

export default router;
