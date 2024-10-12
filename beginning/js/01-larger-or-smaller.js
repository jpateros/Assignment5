var firstNum = window.prompt("Enter a number");

var secondNum = window.prompt("Enter another number");

if (firstNum > secondNum) {
    document.write("The bigger number is " + firstNum);
}
else if (secondNum > firstNum) {
    document.write("The bigger number is " + secondNum);
}
else {
    document.write("Both numbers are equal with a shared value of: " + firstNum);
}