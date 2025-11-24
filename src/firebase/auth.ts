import {auth} from './firebaseConfig';
import {signInWithEmailAndPassword,signOut,onAuthStateChanged} from 'firebase/auth';

const login=(email,password)=>{
  return signInWithEmailAndPassword(auth,email,password);
};

const logout=()=>{
  return signOut(auth);
};

const watchUserState=(callback)=>{
  return onAuthStateChanged(auth,callback);
};

export {login,logout,watchUserState};