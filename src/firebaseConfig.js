import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDge_OYALEsKi8Txvr9IEOo0Bhuky3eWeg",
	authDomain: "imessage-cf544.firebaseapp.com",
	projectId: "imessage-cf544",
	storageBucket: "imessage-cf544.appspot.com",
	messagingSenderId: "1045094808506",
	appId: "1:1045094808506:web:efd04addf46a64a192fb83",
	measurementId: "G-M174XWX9VZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
