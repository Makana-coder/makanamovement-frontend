import {getFirestore, doc, setDoc} from 'firebase/firestore';
import {app} from './firebaseConfig';

const db = getFirestore(app);

export const saveData = async <T>(path: string, data: T): Promise<void> => {
  const ref = doc(db, path);
  await setDoc(ref, data);
};

export {db};