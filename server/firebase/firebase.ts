import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

export const app = initializeApp({
  credential: cert('./server/firebase/bargainbids23-firebase-adminsdk-4npwg-62a5652b24.json'),
})

export const firestore = getFirestore();