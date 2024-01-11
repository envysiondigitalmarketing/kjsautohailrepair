import { initializeApp, getApps } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
    apiKey: "AIzaSyB4UIi1IrOxt1BpCDKPBWFnmwY19ZigCgc",
    authDomain: "kjs-blog-7ba9d.firebaseapp.com",
    databaseURL: "https://kjs-blog-7ba9d-default-rtdb.firebaseio.com",
    projectId: "kjs-blog-7ba9d",
    storageBucket: "kjs-blog-7ba9d.appspot.com",
    messagingSenderId: "869580451040",
    appId: "1:869580451040:web:9772452cdff2faebd3b485",
    measurementId: "G-WY91T3V1LF",
};

let firebase_app =
    getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
