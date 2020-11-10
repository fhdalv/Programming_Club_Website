//installing and importing firebase API here

  var firebaseConfig = {
    apiKey: "AIzaSyCeMOx-mlKP7SMdIHBh9MSmiTFchaL-dLQ",
    authDomain: "clubweb-8b7f8.firebaseapp.com",
    databaseURL: "https://clubweb-8b7f8.firebaseio.com",
    projectId: "clubweb-8b7f8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Initializing global variables
  const auth = firebase.auth();
  const db = firebase.firestore();