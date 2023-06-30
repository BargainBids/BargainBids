import { firestore } from '../firebase/firebase';

export default defineEventHandler(async event => {
    const ref = firestore.doc(`product-categories/`);
    const snapshot = await ref.get();
    const data = snapshot.data();
    return data;
})