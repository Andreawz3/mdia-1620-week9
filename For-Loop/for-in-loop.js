var computer  = {brand: "Microsoft", laptop: "Surface Laptop 4", screen: " 13.5\" " } // or --> ' 13.5" '
var sentence = "I have the: ";

for(var item in computer) {
    if(item == "brand") {
        sentence += computer.brand;
    } else if (item == "laptop") {
        sentence += computer.laptop + ".";
        break;
    } else {
        //
    };

    if(item == "brand") {
        sentence += " ";
    };
};

console.log(sentence);
//I have the: Microsoft Surface Laptop 4.