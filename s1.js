// name ideas: oculi (latin), euyun (arabic)
// Every 20 minutes, take a 20-second break and focus your eyes on something at least 20 feet away
//var randomFact = [
//     'Foods rich in foods rich in lutein, zeaxanthin, and vitamin C, like orange peppers can keep eyes sharp.',
//     'Kiwi is the highest fruit source of vitamin C, making it the top eye food in the fruit category.',
//     'Fish with high levels of omega-3 fatty acids can help prevent Age-Related Macular Degeneration.',
//     'Diets excessively high in sugar and refined carbohydrates are a risk factor for cataracts.',
//     'Try to mix 1 tablespoon of ground flax seed or wheat germ into your daily diet for a big boost of eye nutrients.'
//];

//let rndmFct = Math.floor( Math.random() * 4 ) ;

var options = {
    type: "basic", //image
    title: "care for your eyes",
    message: "take a break", //randomFact[rndmFct]
    //contextMessage: "for 20 seconds",
    //priority: 2,
    //eventTime: Date.now() + n,
    silent: true,
    iconUrl: "nazar2_96.svg",
    //imageUrl: "momoa.jpg"
  };

var optionsInit = {
     type: "image",
     title: "care for your eyes",
     message: "This is what your notification looks like",
     //contextMessage: "for 20 seconds",
     //priority: 2,
     //eventTime: Date.now() + n,
     silent: true,
     iconUrl: "nazar2_96.svg",
     //imageUrl: "momoa.jpg"
};

const intervall = 10000; //20 * 60000; //30000; = 30 sec
notifi = () => chrome.notifications.create(options, callback);

//notifiInit = () => chrome.notifications.create(optionsInit, callback);     //first time notification shall show how notification looks like

//notifiInit(); // initial function call 
setInterval(notifi, intervall);  // call intervall function

function callback() {
     console.log('popup done'); 
}