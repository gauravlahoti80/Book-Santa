import firebase from 'firebase';
require('@firebase/firestore')

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA-5jaNweTk09HWsSOG8RKz2XOL_i6y12s",
  authDomain: "book-santa-app-4d715.firebaseapp.com",
  projectId: "book-santa-app-4d715",
  storageBucket: "book-santa-app-4d715.appspot.com",
  messagingSenderId: "1027896932360",
  appId: "1:1027896932360:web:e1893126a5f2ffe07739bd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
