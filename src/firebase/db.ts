import {db} from './firebaseConfig';
import {collection,addDoc,getDocs,serverTimestamp} from 'firebase/firestore';

const addMakanaEvent=(data)=>{
  return addDoc(collection(db,'makanaEvents'),{...data,timestamp:serverTimestamp()});
};

const getMakanaEvents=()=>{
  return getDocs(collection(db,'makanaEvents'));
};

export {addMakanaEvent,getMakanaEvents};