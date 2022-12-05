import admin from 'firebase-admin';

admin.initializeApp();
export default class FirestoreService {
  private collection;
  constructor(collectionPath: string) {
    this.collection = admin.firestore().collection(collectionPath);
  }

  async saveDocument(payload: Record<string, any>) {
    return payload?.id ? this.collection.doc(payload.id).set(payload) : this.collection.doc().set(payload);
  }

  async getDocumentSnapshot(id: string) {
    return this.collection.doc(id).get();
  }

  async getDocumentSnapshots() {
    return this.collection.get();
  }
}
