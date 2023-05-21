import React, {Component} from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBbthhuNESxHxio_VV-4EbVvax-ynIujaI",
  authDomain: "intercollegiateyachtclub.firebaseapp.com",
  projectId: "intercollegiateyachtclub",
  storageBucket: "intercollegiateyachtclub.appspot.com",
  messagingSenderId: "319816467606",
  appId: "1:319816467606:web:093b09240c1532e5cdaeb7",
  measurementId: "G-HEVXRPJYLD"
};
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app);

