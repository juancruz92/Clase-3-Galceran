import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBpi67Yyy85UisAlJdx_xoMnHb9PrXgigE",
    authDomain: "e-c-react-juan-cruz-galceran.firebaseapp.com",
    projectId: "e-c-react-juan-cruz-galceran",
    storageBucket: "e-c-react-juan-cruz-galceran.appspot.com",
    messagingSenderId: "286212938013",
    appId: "1:286212938013:web:07825694f682a3d6f229f4"
  };

  const app = firebase.initializeApp(firebaseConfig);

  export const getFirebase = () => app;

  export const getFirestore = () => {
      return firebase.firestore(app);
  }