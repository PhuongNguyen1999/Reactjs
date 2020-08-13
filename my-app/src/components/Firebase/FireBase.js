import firebase from 'firebase/app'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyB8qJijs-w_m6R4qkLHIT6dIplyEGkLzxY",
    authDomain: "fir-react-upload-6e61b.firebaseapp.com",
    databaseURL: "https://fir-react-upload-6e61b.firebaseio.com",
    projectId: "fir-react-upload-6e61b",
    storageBucket: "fir-react-upload-6e61b.appspot.com",
    messagingSenderId: "271875685880",
    appId: "1:271875685880:web:c6641b6213e367d5232a0d",
    measurementId: "G-LH70W67GQ0"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage()
export  { storage, firebase as default }