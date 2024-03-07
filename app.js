alert("Simple Calculator")
var firstValue = prompt("Please Enter First Number")
if(isNaN(firstValue)){
    alert("Error: Please Enter Only Numbers")
    reload();
}
var operator = prompt("What do you want? + , - , * and /")
var secondValue = prompt("Please Enter Second Number")
if(isNaN(secondValue)){
    alert("Error: Please Enter Only Numbers")
    reload();
}

var firstValue = parseInt(firstValue)
var secondValue = parseInt(secondValue)


if(operator == "+"){
    var result = firstValue + secondValue;
    alert("Addition of two Numbers " + firstValue + " + " + secondValue  + " = " + result);
    firstValue, secondValue, operator ="";
} else if(operator == "-"){
    var result = firstValue + secondValue;
    alert("Subtraction of two Numbers " + firstValue + " - " + secondValue  + " = " + result);
    firstValue, secondValue, operator ="";
} else if(operator == "*"){
    var result = firstValue * secondValue;
    alert("Multiplication of two Numbers " + firstValue + " x " + secondValue  + " = " + result);
    firstValue, secondValue, operator ="";
} else if(operator == "/"){
    var result = firstValue / secondValue;
    alert("Division of two Numbers " + firstValue + " / " + secondValue  + " = " + result);
    firstValue, secondValue, operator ="";
} else {
    alert("Error: Please Enter Correct Operator. e.g  + , - , * and /")
    firstValue, secondValue, operator ="";
}