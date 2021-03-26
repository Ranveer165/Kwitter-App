
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDMHXT95Cc7MWB8wcAY1SurBBurBhcH_vI",
      authDomain: "kwitter-81308.firebaseapp.com",
      databaseURL: "https://kwitter-81308-default-rtdb.firebaseio.com",
      projectId: "kwitter-81308",
      storageBucket: "kwitter-81308.appspot.com",
      messagingSenderId: "97585703280",
      appId: "1:97585703280:web:6f5e35752d66c4f91247b5"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    function addRoom(){
       room_name=document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"})
          localStorage.setItem("room_name",room_name); 
          window.location="kwitter_page.html";

    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
   console.log(Room_names);
   row="<div class='room_name' id="+  Room_names+ " onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";          
   document.getElementById("output").innerHTML+=row; 
      //End code
      });});}
getData();
function redirectToRoomName(name){
   console.log(name);
   localStorage.setItem("room_name",name);
   window.location="kwitter_page.html";
}