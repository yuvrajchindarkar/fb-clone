import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBmsS3cCbihFdpW1AD1RHxzFqe9XZjFY0U",
    authDomain: "facebook-clone-8b8c7.firebaseapp.com",
    projectId: "facebook-clone-8b8c7",
    storageBucket: "facebook-clone-8b8c7.appspot.com",
    messagingSenderId: "691560992983",
    appId: "1:691560992983:web:6fb86e9c3e4514c7512092",
    measurementId: "G-L90SLYR5XM"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;