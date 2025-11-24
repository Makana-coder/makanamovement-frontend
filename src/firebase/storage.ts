import { getDownloadURL, ref, uploadBytes, deleteObject } from "firebase/storage";
import { storage } from "./firebaseConfig";

export const uploadFile = async (file: File, path: string): Promise<string> => {
  const fileRef = ref(storage, path);
  await uploadBytes(fileRef, file);
  return await getDownloadURL(fileRef);
};

export const deleteFile = async (path: string): Promise<void> => {
  const fileRef = ref(storage, path);
  await deleteObject(fileRef);
};