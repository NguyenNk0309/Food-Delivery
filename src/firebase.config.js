import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyBZ5ylSzXVNCGbFyZ_Na5yNjLVoGWP_Y1c',
    authDomain: 'test-609ba.firebaseapp.com',
    databaseURL: 'https://test-609ba-default-rtdb.firebaseio.com',
    projectId: 'test-609ba',
    storageBucket: 'test-609ba.appspot.com',
    messagingSenderId: '225147404199',
    appId: '1:225147404199:web:b39f15f487b501a09d8082',
}

const app = initializeApp(firebaseConfig)

const firestore = getFirestore(app)
const storage = getStorage(app)
const firebaseAuth = getAuth(app)

export { app, firestore, storage, firebaseAuth }
