
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBADrj99w0Nn94yoWV9und8LkTsp4vfeg8",
      authDomain: "kwitter-project-ababf.firebaseapp.com",
      databaseURL: "https://kwitter-project-ababf.firebaseio.com",
      projectId: "kwitter-project-ababf",
      storageBucket: "kwitter-project-ababf.appspot.com",
      messagingSenderId: "764021481654",
      appId: "1:764021481654:web:ca1a3197cbf3e14b110617"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
function addRoom(){
      var room_name=document.getElementById("room_name").value;
      localStorage.setItem("Room name",room_name);
      username=localStorage.getItem("user_name");
      console.log(username);
      firebase.database().ref("/").child(room_name).update({
             username : ""
          });
      
}
function load(){
      document.getElementById("welcome_name").innerHTML="Welcome "+localStorage.getItem("user_name")+"!";
}

