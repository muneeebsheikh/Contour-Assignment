import config from '../config.json'
import firebase from "firebase/compat/app";
require('firebase/compat/auth');
require('firebase/compat/database');

firebase.initializeApp({
    apiKey: config.firebase.apiKey,
    authDomain: config.firebase.authDomain,
    projectId: config.firebase.projectId,
    storageBucket: config.firebase.storageBucket,
    messagingSenderId: config.firebase.messagingSenderId,
    appId: config.firebase.appId,
    measurementId: config.firebase.measurementId
})
const db = firebase.database();

export default db;

