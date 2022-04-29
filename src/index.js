import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Totally Good Programing adding firebase which is VERY COOL
const firebaseConfig = {
  apiKey: "AIzaSyDCiZ6bbFMCBZgouyoU52tOnrQMz4dxKeA",
  authDomain: "onlyhands-f2420.firebaseapp.com",
  projectId: "onlyhands-f2420",
  storageBucket: "onlyhands-f2420.appspot.com",
  messagingSenderId: "497487467556",
  appId: "1:497487467556:web:ec3dfb4e747362ec2fb4b1",
  measurementId: "G-699HFVWLMC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
