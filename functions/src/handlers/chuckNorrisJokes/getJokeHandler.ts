import { RequestHandler } from 'express';
import FirestoreService from '../../services/firestoreService';

export const getJokeHandler: RequestHandler = async (req, res) => {
  const firestoreService = new FirestoreService('joke');
  const doc = await firestoreService.getDocumentSnapshot(req.params.id);
  res.send({
    id: doc.id,
    ...doc.data()
  });
};
