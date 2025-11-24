import { addDoc, collection } from 'firebase/firestore';
import type { WithFieldValue, DocumentData } from 'firebase/firestore';
import { db } from './firebaseConfig';  

export const createDocument = async <T extends DocumentData>(
  collectionPath: string,
  data: WithFieldValue<T>
) => {
  const colRef = collection(db, collectionPath);
  return await addDoc(colRef, data);
};