import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA-VIbfngLwdvnOfMw_zE6z_hKpP_X4Yd0",
    authDomain: "whatsapp-ce4c8.firebaseapp.com",
    projectId: "whatsapp-ce4c8",
    storageBucket: "whatsapp-ce4c8.appspot.com",
    messagingSenderId: "548258087005",
    appId: "1:548258087005:web:ac54970015ba39d9f78db4"
  };

  const app =!firebase.apps.length? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();
  const auth = app.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export { db , auth , provider};
