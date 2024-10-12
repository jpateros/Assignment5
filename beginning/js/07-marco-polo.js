// Create an application which iterates numbers from 1 to 100. For multiples of 3, print "Marco!" instead of the number and for multiples of 5, print "Polo!" instead of the number. 
// For numbers which are multiples of both 3 and 5 print "Marco! Polo!". 

for (var i = 1; i <= 100; i++) {
    //both 3 and 5 divisible
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Marco! Polo!");
        //just divisible by three
    } else if (i % 3 === 0) {
        console.log("Marco!");
        //just divisible by 5
    } else if (i % 5 === 0) {
        console.log("Polo!");
    } else {
        console.log(i);
    }
}
