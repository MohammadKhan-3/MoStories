import firebase from "firebase/app"
import "firebase/firestore"

var firebaseConfig = 'yourFirebaseConfig'

firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()

export default firebase

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.7.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.7.0/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyByxPVwrqB7GV8N5gbkmg63rM4y7F17FvM",
    authDomain: "mostories-7cb43.firebaseapp.com",
    projectId: "mostories-7cb43",
    storageBucket: "mostories-7cb43.appspot.com",
    messagingSenderId: "814086526664",
    appId: "1:814086526664:web:09db4f7ab35def1301b7fd",
    measurementId: "G-R5RGNHV4Q2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>