import firebase from 'firebase/app';
import firestore from 'firebase/firestore';

/******* Ex#3 - Étape B ********************************/ 
// Ajouter votre objet de configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAycOwAdmCS-RBnyoE3q4p7YSDfXgvFWa0",
  authDomain: "react-iwra-4ccd3.firebaseapp.com",
  projectId: "react-iwra-4ccd3",
  storageBucket: "react-iwra-4ccd3.appspot.com",
  messagingSenderId: "619578293854",
  appId: "1:619578293854:web:9b6a0596b3fac83b71fecf"
};

// Initialiser Firebase
if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig);
  }
// Initialiser Firestore
const dbFirestore = firebase.firestore();

/******* Ex#3 - Étape C ********************************/ 
// Exporter (par défaut) ci-dessous la référence à "bd" obtenue ci-dessus (pour pouvoir l'utiliser dans le composant ListeProduits)
export default dbFirestore;