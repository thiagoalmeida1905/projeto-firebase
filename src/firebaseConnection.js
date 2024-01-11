import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD7j31fSJb-QX5bL61IPeQPnPi1tVpazvw",
    authDomain: "curso-sujprogramador.firebaseapp.com",
    projectId: "curso-sujprogramador",
    storageBucket: "curso-sujprogramador.appspot.com",
    messagingSenderId: "390230676052",
    appId: "1:390230676052:web:a101b4f224742898ec93c1",
    measurementId: "G-NHH775N009"
  };

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
