import express from "express";
import {
  getPhotos,
  getPhotoById,
  createPhoto,
  updatePhoto,
  deletePhoto,
} from "../controllers/photoController";

const router = express.Router();

router.route("/").get(getPhotos).post(createPhoto);
router.route("/:id").get(getPhotoById).patch(updatePhoto).delete(deletePhoto);

export default router;
