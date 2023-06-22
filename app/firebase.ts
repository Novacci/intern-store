import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.DB_FIREBASE_API_KEY,
  authDomain: 'internstore-1a37a.firebaseapp.com',
  projectId: 'internstore-1a37a',
  storageBucket: 'internstore-1a37a.appspot.com',
  messagingSenderId: '719520874343',
  appId: process.env.DB_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
