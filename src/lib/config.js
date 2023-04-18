import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyA8Am3qoHpgCwXRJFEGgWm7s09qngAk_V4',
	authDomain: 'sveltetodoapp-f27b7.firebaseapp.com',
	projectId: 'sveltetodoapp-f27b7',
	storageBucket: 'sveltetodoapp-f27b7.appspot.com',
	messagingSenderId: '527061048932',
	appId: '1:527061048932:web:91a9642c5b1dd82ce38971',
	measurementId: 'G-3EMH9KDX8Q'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
