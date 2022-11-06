import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAMYFQPEPlskQteUNzemOCCABQla0we48A",
  authDomain: "guido-mansilla-react-34775.firebaseapp.com",
  projectId: "guido-mansilla-react-34775",
  storageBucket: "guido-mansilla-react-34775.appspot.com",
  messagingSenderId: "605927806098",
  appId: "1:605927806098:web:7005efa31a66f1b90a424b",
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);