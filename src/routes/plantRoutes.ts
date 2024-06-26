import express from 'express';
import { getPlants, getPlantById, createPlant, updatePlant, deletePlant } from '../controllers/plantController';

const router = express.Router();

router.route('/').get(getPlants).post(createPlant);
router.route('/:id').get(getPlantById).patch(updatePlant).delete(deletePlant);

export default router;
