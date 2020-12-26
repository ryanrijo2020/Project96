var firebaseConfig = {
    apiKey: "AIzaSyA1M4DseRlLRFMTte-K8M_KenfpYW23EBA",
    authDomain: "project-96-aae40.firebaseapp.com",
    databaseURL: "https://project-96-aae40-default-rtdb.firebaseio.com",
    projectId: "project-96-aae40",
    storageBucket: "project-96-aae40.appspot.com",
    messagingSenderId: "174974086916",
    appId: "1:174974086916:web:0d0f6a55aedad9477d6a51"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  username=localStorage.getItem("user_name");
roomname=localStorage.getItem("roomname");
function send() {
      message=document.getElementById("msg").value;
      firebase.database().ref(roomname).push({
            name:username,
            message:message,
            like:0
      });
      document.getElementById("msg").value="";
}