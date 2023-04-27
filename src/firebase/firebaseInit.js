import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKwW-w2c7uy7u6Bx7vtCDMzfvtZgNudp0",
  authDomain: "fireblogsyt-ee0c2.firebaseapp.com",
  projectId: "fireblogsyt-ee0c2",
  storageBucket: "fireblogsyt-ee0c2.appspot.com",
  messagingSenderId: "839119775518",
  appId: "1:839119775518:web:838c01845b48f98c368b0f",
  measurementId: "G-32WTP4Y1J2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
