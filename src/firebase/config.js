import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCqh195UzFJnKKfoSUed9eg4DXJYEVVqw8",
  authDomain: "udemy-firebase-vue-js-course.firebaseapp.com",
  projectId: "udemy-firebase-vue-js-course",
  storageBucket: "udemy-firebase-vue-js-course.appspot.com",
  messagingSenderId: "856141220493",
  appId: "1:856141220493:web:2c576400372c20be4330c4"
};

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }
