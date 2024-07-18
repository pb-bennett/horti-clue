import express from "express";
import {
  getGardens,
  getGardenById,
  createGarden,
  updateGarden,
  deleteGarden,
} from "../controllers/gardenController";

const router = express.Router();

router.route("/").get(getGardens).post(createGarden);
router
  .route("/:id")
  .get(getGardenById)
  .patch(updateGarden)
  .delete(deleteGarden);

export default router;
