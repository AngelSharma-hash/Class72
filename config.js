import firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyAThFI0qUJ1DQXhf0S7XGKsY_GvjsJ9hs8",
  authDomain: "class71-ef164.firebaseapp.com",
  projectId: "class71-ef164",
  storageBucket: "class71-ef164.appspot.com",
  messagingSenderId: "259382546766",
  appId: "1:259382546766:web:c6b98d6543136835618e1f"
  };
  
firebase.initializeApp(firebaseConfig)

export default firebase.firestore()