import { ref, uploadBytes, deleteObject } from 'firebase/storage';
import { storage } from './firebaseConfig';

export const uploadFile = async (file: File) => {
  const fileRef = ref(storage, `uploads/${file.name}`);
  await uploadBytes(fileRef, file);
  return fileRef;
};

export const deleteFile = async (path: string) => {
  const fileRef = ref(storage, path);
  return deleteObject(fileRef);
};