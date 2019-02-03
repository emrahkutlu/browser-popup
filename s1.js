// oculi, euyun

var options = {
    type: "image",
    title: "care for your eyes",
    message: "take a break",
    //contextMessage: "for 20 seconds",
    //priority: 2,
    //eventTime: Date.now() + n,
    silent: true,
    iconUrl: "48.png",
    imageUrl: "momoa.jpg"
  };

const intervall = 30000;    //20 * 60000
notifi = () => chrome.notifications.create(options, callback);

notifi(); // initial function call 
//setInterval(notifi, intervall);  // call intervall function

function callback() {
       console.log('popup done'); 
}