import { RequestHandler } from 'express';
import FirestoreService from '../../services/firestoreService';

export const getCatFactHandler: RequestHandler = async (req, res) => {
  const firestoreService = new FirestoreService('cats');
  const doc = await firestoreService.getDocumentSnapshot(req.params.id);
  res.send({
    id: doc.id,
    ...doc.data()
  });
};
