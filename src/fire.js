//Import statements
import * as firebase from 'firebase'

//Configuration API
  var config = {
    apiKey: 'AIzaSyBy3KbOWcnO63VO3rC6xQYO4qDU_9cXcWM',
    authDomain: 'rbchack-ee709.firebaseapp.com',
    databaseURL: 'https://rbchack-ee709.firebaseio.com',
    projectId: "rbchack-ee709",
    storageBucket: "rbchack-ee709.appspot.com",
    messagingSenderId: "393751877846"
  };

  //Initialization Statement
  var fire = firebase.intializeApp(config);
  var defaultAuth = firebase.auth();
  var data = firebase.database();
  

  //Export
  export default fire;
  export default defaultAuth;
  export default data;