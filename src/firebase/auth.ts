import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  type User
} from 'firebase/auth';
import {app} from './firebaseConfig';

const auth = getAuth(app);

export const login = async (email: string, password: string) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const logout = async () => {
  return await signOut(auth);
};

export const watchUserState = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};

export type {User};
export {auth};