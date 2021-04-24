import firebase from 'firebase';

const firebaseApp = firebase.initializeApp(
	{apiKey: "AIzaSyCj0rXvrH8uhf0kL1IEPZOC3t1JAKQlfUo",
	authDomain: "todo-app-82439.firebaseapp.com",
	projectId: "todo-app-82439",
	storageBucket: "todo-app-82439.appspot.com",
	messagingSenderId: "247012905462",
	appId: "1:247012905462:web:c4fe56ae8663c90127f7d7",
	measurementId: "G-302C26GB91"});

const db = firebaseApp.firestore();

export {db};