import firebaseConfig from "./firebaseConfig.ts";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Utilisez firebaseConfig comme vous l'avez fait auparavant
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
