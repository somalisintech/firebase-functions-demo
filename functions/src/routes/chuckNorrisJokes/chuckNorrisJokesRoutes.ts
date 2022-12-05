import express from 'express';
import { getAllJokesHandler, getJokeHandler, saveJokeHandler } from '../../handlers';

export const chuckNorrisJokesRoutes = express.Router();

chuckNorrisJokesRoutes.get('/joke/:id', getJokeHandler);
chuckNorrisJokesRoutes.get('/jokes', getAllJokesHandler);
chuckNorrisJokesRoutes.post('/jokes', saveJokeHandler);
