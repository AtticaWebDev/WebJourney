import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import { db, storage } from "../firebase/config";
import { v4 as uuidv4 } from "uuid";
import { addDoc, collection } from "firebase/firestore";
import { useAuth } from "./useAuth";

function useStorage(setUrl: ((arg0: string) => void) | undefined) {
  // Passer la fonction setUrl comme argument
  const [progress, setProgress] = useState<number>(0);
  const [error, setError] = useState<Error | null>(null);
  //   const [url, setUrl] = useState<string | null>(null);
  const { user } = useAuth();

  const startUpload = (file: File) => {
    if (!file) {
      return;
    }

    const fileId = uuidv4();
    const formatFile = file.type.split("/")[1];
    const storageRef = ref(storage, `images/${fileId}.${formatFile}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        setError(error);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        if (setUrl) {
          // Vérification si setUrl est défini
          setUrl(downloadURL); // Utiliser la fonction setUrl pour mettre à jour l'URL
        }
        setProgress(progress);
        await addDoc(collection(db, "images"), {
          imageUrl: downloadURL,
          createAt: new Date(),
          userEmail: user?.email,
        });
      }
    );
  };

  return {
    progress,
    error,
    startUpload,
  };
}
export default useStorage;
