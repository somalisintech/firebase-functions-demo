import { RequestHandler } from 'express';
import FirestoreService from '../../services/firestoreService';
import { fetchCatFact } from '../../services/fetchCatFact';

export const saveCatFactsHandler: RequestHandler = async (req, res) => {
  const firestoreService = new FirestoreService('cats');
  const catFact = await fetchCatFact();
  const response = await firestoreService.saveDocument(catFact);

  res.send(response);
};
