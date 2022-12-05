import { RequestHandler } from 'express';
import FirestoreService from '../../services/firestoreService';

export const getAllJokesHandler: RequestHandler = async (req, res) => {
  const firestoreService = new FirestoreService('jokes');
  const documentSnapshots = await firestoreService.getDocumentSnapshots();
  const documentData = documentSnapshots.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }));

  res.json(documentData);
};
