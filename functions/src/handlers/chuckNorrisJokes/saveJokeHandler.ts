import { RequestHandler } from 'express';
import FirestoreService from '../../services/firestoreService';
import { fetchChuckNorrisJoke } from '../../services/fetchChuckNorrisJoke';

export const saveJokeHandler: RequestHandler = async (req, res) => {
  const firestoreService = new FirestoreService('jokes');
  const joke = await fetchChuckNorrisJoke();
  const response = await firestoreService.saveDocument(joke);

  res.send(response);
};
