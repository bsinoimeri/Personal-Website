import * as firebase from 'firebase';
// import firestore from 'firebase/firestore'

const config = {
    apiKey: "AIzaSyD-V4FpbG4U4HMvpLYL3GrWGNE8jPvFfHY",
    authDomain: "personal-web-bela.firebaseapp.com",
    databaseURL: "https://personal-web-bela.firebaseio.com",
    projectId: "personal-web-bela",
    storageBucket: "personal-web-bela.appspot.com",
    messagingSenderId: "1065702187540",
    appId: "1:1065702187540:web:9b2fd07a4cedf61b6a3d01"
};
firebase.initializeApp(config);

firebase.firestore();

export default firebase;