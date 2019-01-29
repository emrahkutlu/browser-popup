const countdown = 6000; // 6 seconds. 20 min => 20 * 60000
let counter1 = countdown;

function timedText() {
  var options = {
    type: "basic",
    title: "my first popup",
    message: "tis is cool",
    iconUrl: "48.png"
  };

  chrome.notifications.create(options, callback);

  callback = () => console.log('popup done'); 

  setInterval(myTimeout1, countdown) 
}

function notifyMe() {
  console.log("test")
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    alert("This browser does not support system notifications");
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    var notification = new Notification("Hi there!");
    console.log("result");



  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        var notification = new Notification("Hi there!");
      }
    });
  }

  // Finally, if the user has denied notifications and you 
  // want to be respectful there is no need to bother them any more.
}


function myTimeout1() {
  console.log("loop number " + counter1);
  document.getElementById("demo").innerHTML = countdown + " minutes are up." +  '\n' + "Now relax your eyes.";
  window.alert("Hello world!");

  notifyMe(); 
  counter1 += 1;
 
  
  function notify() {

    var options = {
      type: "basic",
      title: "my first popup",
      message: "tis is cool",
      iconUrl: "48.png"
    };

    chrome.notifications.create(options, callback);

    callback = () => console.log('popup done'); 
    

   // chrome.notifications.create("richnotify", {
   //   type: "image",
   //   iconUrl: "48.png",
   //   imageUrl: image,
   //   title: "Notification Title",
   //   message: "message",
   // }, function () {
   //   console.log("Notification showed!")
   // })
  }

  notify();

  
}

