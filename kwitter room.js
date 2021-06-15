var firebaseConfig = {
    apiKey: "AIzaSyB51m6vJRnCEyqHRSx53pOOa7KY0JV6YTo",
    authDomain: "chat-bird-4a20b.firebaseapp.com",
    projectId: "chat-bird-4a20b",
    storageBucket: "chat-bird-4a20b.appspot.com",
    messagingSenderId: "308948159559",
    appId: "1:308948159559:web:295eb5576b1dd0f2093562"
  };
       
  user_name=localStorage.getItem("user_name")
  document.getElementById("user_name").innerHTML="Welcome " + user_name+ "!";

  function addRoom(){
        room_name=document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose : "adding room name"
        });
        localStorage.setItem("room_name", room_name);
        window.location="kwitter_page.html";
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+ "</div><hr>";
    document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location="kwitter_name.html";
}