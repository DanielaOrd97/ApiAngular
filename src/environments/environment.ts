import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyCekCB7epSRxzqWnL2LnKaKdwWmvcklobg',
  authDomain: 'burguerapi-59f2a.firebaseapp.com',
  projectId: 'burguerapi-59f2a',
  storageBucket: 'burguerapi-59f2a.appspot.com',
  messagingSenderId: '748282409597',
  appId: '1:748282409597:web:96dbc7f9730084a523f714',
  measurementId: 'G-85PPHH7J0S',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
