import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyCsauIehRn9FXQaGZWd_TLMK1jDYCSnQEk',
	authDomain: 'project2-36f5b.firebaseapp.com',
	databaseURL: 'https://project2-36f5b-default-rtdb.firebaseio.com',
	projectId: 'project2-36f5b',
	storageBucket: 'project2-36f5b.appspot.com',
	messagingSenderId: '926048780800',
	appId: '1:926048780800:web:a170d835cf3e1581468ee5',
	measurementId: 'G-HYK8C0SHYX',
}

const app = initializeApp(firebaseConfig)

const firestore = getFirestore(app)
const storage = getStorage(app)
const firebaseAuth = getAuth(app)

export { app, firestore, storage, firebaseAuth }
