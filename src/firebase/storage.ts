import {storage} from './firebaseConfig';
import {ref,uploadBytes,getDownloadURL} from 'firebase/storage';

const uploadFile=(file,path)=>{
  const storageRef=ref(storage,path);
  return uploadBytes(storageRef,file);
};

const getFileUrl=(path)=>{
  const storageRef=ref(storage,path);
  return getDownloadURL(storageRef);
};

export {uploadFile,getFileUrl};