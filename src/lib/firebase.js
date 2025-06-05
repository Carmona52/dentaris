import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBx1NVSW1zLjiqZfnO142c118TgHTC_FMc",
    authDomain: "dentaris-81d00.firebaseapp.com",
    projectId: "dentaris-81d00",
    storageBucket: "dentaris-81d00.firebasestorage.app",
    messagingSenderId: "1016398060926",
    appId: "1:1016398060926:web:b1e429b64d381d16e2272f",
    measurementId: "G-8DXXJWJB2Y"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
