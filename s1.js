var options = {
    type: "basic",
    title: "my first popup",
    message: "tis is cool",
    iconUrl: "48.png"
  };

  chrome.notifications.create(options, callback);

  function callback() {
       console.log('popup done'); 
  }