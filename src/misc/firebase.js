import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyCwbxXmJz4pRx7A9h2SOHxcAIpmandvAUQ',
  authDomain: 'chat-app-2eec1.firebaseapp.com',
  projectId: 'chat-app-2eec1',
  storageBucket: 'chat-app-2eec1.appspot.com',
  messagingSenderId: '615816183959',
  appId: '1:615816183959:web:eeafe5d937284fc32ba9d2',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
