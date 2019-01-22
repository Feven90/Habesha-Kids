
import firebase from 'firebase/app';
import 'firebase/auth';

const authenticate = () => {
  // firebase.auth().createUserWithEmailAndPassword(email, password); 
  firebase.auth().signInWithEmailAndPassword(this.email, this.password);
  // const provider = new firebase.auth.GoogleAuthProvider();
  // return firebase.auth().signInWithPopup(provider);
};

const logoutUser = () => firebase.auth().signOut();

const getCurrentUid = () => firebase.auth().currentUser.uid;

export default {
  authenticate,
  logoutUser,
  getCurrentUid,
};