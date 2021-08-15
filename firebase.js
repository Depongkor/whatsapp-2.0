import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAU5Gl13NoVavIdYrlk3qCuJwVSNwaZ7j4",
    authDomain: "whatsapp-2-7f0d1.firebaseapp.com",
    projectId: "whatsapp-2-7f0d1",
    storageBucket: "whatsapp-2-7f0d1.appspot.com",
    messagingSenderId: "606549908064",
    appId: "1:606549908064:web:46f136b583c4f48c85c105",
    measurementId: "G-SN69PFXT42"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };