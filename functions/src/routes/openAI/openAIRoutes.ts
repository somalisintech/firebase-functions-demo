import express from 'express';
import { createCompletionHandler } from '../../handlers';

export const openAIRoutes = express.Router();

openAIRoutes.get('/create-completion', createCompletionHandler);
