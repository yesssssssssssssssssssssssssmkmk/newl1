import firebase from 'firebase';

  var firebaseConfig = {
    apiKey: "AIzaSyDijQxVgkdQUtFZASvdCfPYqzkSC9T96gY",
    authDomain: "newsletter-e21b1.firebaseapp.com",
    databaseURL: "https://newsletter-e21b1-default-rtdb.firebaseio.com",
    projectId: "newsletter-e21b1",
    storageBucket: "newsletter-e21b1.appspot.com",
    messagingSenderId: "563735082360",
    appId: "1:563735082360:web:423c01e990e5477f55c48d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.database();