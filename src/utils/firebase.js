// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVxlBbLACbzGMICxSxgL_jR4LWzyXZqFA",
  authDomain: "netflixgpt-6a279.firebaseapp.com",
  projectId: "netflixgpt-6a279",
  storageBucket: "netflixgpt-6a279.appspot.com",
  messagingSenderId: "1047467358312",
  appId: "1:1047467358312:web:6b854c2e4d406c00e4e3dd",
  measurementId: "G-4XQVQW66SV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);