import { addDoc, collection, getDocs } from 'firebase/firestore';
import type { WithFieldValue, DocumentData } from 'firebase/firestore';

export const createDocument = async <T extends DocumentData>(
  collectionPath: string,
  data: WithFieldValue<T>
) => {
  const colRef = collection(db, collectionPath);
  return await addDoc(colRef, data);
};