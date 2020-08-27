// const firebaseConfig = {
// 	apiKey: 'AIzaSyC7Ixn3zr6MLatyWvqiRtAz8rpluVeASIg',
// 	authDomain: 'todoapp-45187.firebaseapp.com',
// 	databaseURL: 'https://todoapp-45187.firebaseio.com',
// 	projectId: 'todoapp-45187',
// 	storageBucket: 'todoapp-45187.appspot.com',
// 	messagingSenderId: '691568490005',
// 	appId: '1:691568490005:web:a3e5139ea90843b935401c',
// 	measurementId: 'G-KC7N771ZNZ',
// };

import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyC7Ixn3zr6MLatyWvqiRtAz8rpluVeASIg',
	authDomain: 'todoapp-45187.firebaseapp.com',
	databaseURL: 'https://todoapp-45187.firebaseio.com',
	projectId: 'todoapp-45187',
	storageBucket: 'todoapp-45187.appspot.com',
	messagingSenderId: '691568490005',
	appId: '1:691568490005:web:a3e5139ea90843b935401c',
	measurementId: 'G-KC7N771ZNZ',
});

const db = firebaseApp.firestore();

export { db };
