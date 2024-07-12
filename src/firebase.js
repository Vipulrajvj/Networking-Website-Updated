// make a project and get the settings by clicking on the settings on the sidebar in firebase
//Get the config from project settings from the top
//Do npm add firebase to integrate it in vs code installing firebase into the project 
//Step 19 integrate firebase

import firebase from 'firebase';

const firebaseConfig = {

    apiKey: "AIzaSyB0DW70LSYIL64Dg1HuCZTiWyZvVD0-Cto",
  
    authDomain: "network-vipulraj.firebaseapp.com",
  
    projectId: "network-vipulraj",
  
    storageBucket: "network-vipulraj.appspot.com",
  
    messagingSenderId: "838639781900",
  
    appId: "1:838639781900:web:ac424f1978d95bf8828629",
  
    measurementId: "G-6EY9HSTR4K"
  
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig); //This connects all the config details we got from the firebase website
  const db = firebaseApp.firestore();  //Firestore is the database and we take db as the variable to get that database 
  const auth = firebaseApp.auth();

  export {db , auth};