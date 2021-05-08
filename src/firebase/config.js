import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: 'AIzaSyAKVXiiENX11L0bRJ99kO9CHXLxZf6GRGU',
  authDomain: 'megram-b00ba.firebaseapp.com',
  projectId: 'megram-b00ba',
  storageBucket: 'megram-b00ba.appspot.com',
  messagingSenderId: '127373718268',
  appId: '1:127373718268:web:80b5e278f1596b91b89d79',
  measurementId: 'G-G8FMVYMWSK',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectStorage, projectFirestore, timestamp }
