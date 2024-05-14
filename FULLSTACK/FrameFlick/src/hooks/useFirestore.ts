import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";

type Image = {
  createAt: Date;
  userEmail: string;
  imageUrl: string;
};

const useFirestore = (collectionName: string) => {
  const [docs, setDocs] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let unsubscribe: () => void;
    const getData = async () => {
      try {
        const q = query(
          collection(db, collectionName),
          orderBy("createAt", "desc") // Modifier ici
        );
        // console.log("Query:", q);

        unsubscribe = onSnapshot(q, (querySnapshot) => {
          const images: Image[] = [];
          querySnapshot.forEach((doc) => {
            const imageUrl = doc.data().imageUrl;
            const createAt = doc.data().createAt.toDate(); // Modifier ici
            const userEmail = doc.data().userEmail;
            images.push({ imageUrl, createAt, userEmail }); // Modifier ici
          });
          console.log("Images from Firestore:", images);
          setDocs(images);
          setIsLoading(false);
        });
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    getData();

    return () => unsubscribe && unsubscribe();
  }, [collectionName]);

  return {
    docs,
    isLoading,
  };
};

export default useFirestore;
