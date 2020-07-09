import Rebase from 're-base';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAoaDu4RoMzPq39bkts7n4redplWxwAsJs",
  authDomain: "catchofthedaydaniel2.firebaseapp.com",
  databaseURL: "https://catchofthedaydaniel2.firebaseio.com",
  projectId: "catchofthedaydaniel2",
  storageBucket: "catchofthedaydaniel2.appspot.com",
  messagingSenderId: "227461026327",
  appId: "1:227461026327:web:81fdcf81c6bb05ee438252"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;