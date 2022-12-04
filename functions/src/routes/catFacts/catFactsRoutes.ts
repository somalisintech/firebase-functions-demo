import express from 'express';
import { getAllCatFactsHandler, getCatFactHandler, saveCatFactsHandler } from '../../handlers';

export const catFactsRoutes = express.Router();

catFactsRoutes.get('/fact/:id', getCatFactHandler);
catFactsRoutes.get('/facts', getAllCatFactsHandler);
catFactsRoutes.post('/facts', saveCatFactsHandler);
