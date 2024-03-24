// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8_6WlkaLIPSg1wGSflxTzloxtx3ca0OI",
  authDomain: "befoddy-d91ac.firebaseapp.com",
  projectId: "befoddy-d91ac",
  storageBucket: "befoddy-d91ac.appspot.com",
  messagingSenderId: "769717599712",
  appId: "1:769717599712:web:22aae3e661bf2d45d7bf85",
  measurementId: "G-FG3D30BT5R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);