//YOUR FIREBASE LINKS

var firebaseConfig = {
    apiKey: "AIzaSyDCR5-vNuzsNpTnO8sofL-63iY4M3W-hSQ",
    authDomain: "chat-app-733dc.firebaseapp.com",
    databaseURL: "https://chat-app-733dc-default-rtdb.firebaseio.com",
    projectId: "chat-app-733dc",
    storageBucket: "chat-app-733dc.appspot.com",
    messagingSenderId: "281455331778",
    appId: "1:281455331778:web:6dec33da11a048a2706e5b",
    measurementId: "G-2XEB3VEHNG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

  function send(){
        msg=document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0      
        });
        document.getElementById("msg").value="";
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();