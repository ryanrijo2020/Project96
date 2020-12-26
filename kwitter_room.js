function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("roomname");
  window.location="index.html";
} 
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
document.getElementById("user_name").innerHTML="Welcome " + username + "!";

function Addroom() {
  roomname=document.getElementById("room_name").value;
  firebase.database().ref("/").child(roomname).update({
purpose:"roomname"

});
localStorage.setItem("roomname",roomname);
window.location="kwitter_page.html";
}
function getData() {
  firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {
  childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log(roomname);
      row="<div class='room_name' id=" + Room_names + "onclick='redirect(this.id)'>#" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML +=row;
      });
    });
  } 
getData();
function redirect(name) {
  console.log(name);
  localStorage.setItem("roomname" , name);
  window.location="kwitter_page.html";
}


