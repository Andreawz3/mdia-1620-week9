var text = new Date().getDay();
switch (text) {
    case 4:
    case 5:
        text = "Soon it is Weekend";
    break;
    case 0:
    case 6:
     text = "It is Weekend";
    break;
    default:
        text = "I can't wait to sleep in on the weekend";
}
console.log(text);
// 'Fridy = 5' --> Soon it is Weekend

var car = 0;
var text = "";

switch(car) {
    case 0:
        text = "off";
        break;
    case 1: 
        text = "on";
        break;
    default: 
        text = "no value found";
};

console.log("The car is " + text);
// The car is off