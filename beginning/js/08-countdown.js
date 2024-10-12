// Write an application that counts down to 0 based on the number that a user passes into a prompt. If the number is 10, it should count down from 10 to 0.
//  If the number is 100, it should count down from 100 to 0 and so on.  

var num = parseInt(window.prompt("Enter num to count down to 0 from:"));

if (num > 0 && !isNaN(num)) {
    for (var i = num; i >= 0; i--) {
        console.log(i);
    }

} else {
    console.log("Number must be greater than 0 and a real number");
}