import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import App from './App';
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqxX5mSGXxQCxzteKMSvA6vv-gPTHabnc",
  authDomain: "plantparenthood-25576.firebaseapp.com",
  projectId: "plantparenthood-25576",
  storageBucket: "plantparenthood-25576.appspot.com",
  messagingSenderId: "843583428616",
  appId: "1:843583428616:web:07193f8faf0aeaa5ef99bd"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);


