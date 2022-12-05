import express from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import { catFactsRoutes, chuckNorrisJokesRoutes } from './routes';
import * as functions from 'firebase-functions';

const app = express();

app.use(cors({ origin: true }));
app.use(json());

app.use('/cat', catFactsRoutes);
app.use('/chuck-norris', chuckNorrisJokesRoutes);

exports.app = functions.region('europe-west2').https.onRequest(app);
