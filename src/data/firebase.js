import firebase from 'firebase/app';
import firestore from 'firebase/firestore';

/******* Ex#3 - Étape B ********************************/ 
// Ajouter votre objet de configuration Firebase
const firebaseConfig = {

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