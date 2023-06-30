import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const useFirebase = () => {
    const firebaseConfig = {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        projectId: process.env.FIREBASE_AUTH_PROJECT_ID,
        storageBucket: process.env.FIREBASE_AUTH_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_AUTH_MESSAGING_SENDER_ID,
        appId: process.env.FIREBASE_AUTH_APP_ID,
        measurementId: process.env.FIREBASE_AUTH_MEASUREMENT_ID
    }

    const firebaseApp = initializeApp(firebaseConfig);
    const firestore = getFirestore(firebaseApp);

    return {
        firebaseApp,
        firestore
    }
}