import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
import {getAnalytics} from 'firebase/analytics';

const firebaseConfig={
  apiKey:'AIzaSyABixD6VwdPIhygMt5REs3bTCFVBgm4Uw4',
  authDomain:'makanamovement-156a5.firebaseapp.com',
  projectId:'makanamovement-156a5',
  storageBucket:'makanamovement-156a5.firebasestorage.app',
  messagingSenderId:'412146135892',
  appId:'1:412146135892:web:4bc65837015f86b84ecec1'
};

const app=initializeApp(firebaseConfig);

const auth=getAuth(app);
const db=getFirestore(app);
const storage=getStorage(app);

// Analytics works only in browser
let analytics=null;
if(typeof window!=='undefined'){
  analytics=getAnalytics(app);
}

export {app,auth,db,storage,analytics};