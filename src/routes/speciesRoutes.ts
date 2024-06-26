import express from 'express';
import { getSpecies, getSpeciesById, createSpecies, updateSpecies, deleteSpecies } from '../controllers/speciesController';

const router = express.Router();

router.route('/').get(getSpecies).post(createSpecies);
router.route('/:id').get(getSpeciesById).patch(updateSpecies).delete(deleteSpecies);

export default router;
