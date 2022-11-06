for(var i =0; i <= 2; i++) {
    console.log(i);
    if(i == 1){
        break;
    };
};
console.log("Finished");

// 0
// 1
// Finished!

var text = "";
var total = 0;

for(var i = 0; i < 6; i++) {
    if(i == 3) {
        tetx = "finished";
        break;
    } else if (i == 5) {
        i++;
    } else {
        //
    }
    total += i;
};

console.log(text + " at the number " + i + " with a total of " + total);