import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//BRUH 
const firebaseConfig = {
  apiKey: "AIzaSyB2Hegql3W84U4zp8DMlTJDjyJ4Zqqtx20",
  authDomain: "vsb-goals.firebaseapp.com",
  projectId: "vsb-goals",
  storageBucket: "vsb-goals.firebasestorage.app",
  messagingSenderId: "890406129240",
  appId: "1:890406129240:web:0d22309364d9957594042d",
  measurementId: "G-WQVE8L7W3T",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
