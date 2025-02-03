console.log("Welocme To Faulty Calculator")
let input  = document.getElementById("input");
let random = Math.floor(Math.random() * 100);
console.log(random);
alert(random);
let num1 =  prompt("Enter First Number");
let num0 = parseInt(num1) 
let operator = prompt("Enter Operator");
let num2 =  prompt("Enter Second Number");
let num2_1 = parseInt(num2)

if (random < 10) {
    if (operator == "+") {
        alert(num2_1 - num0);
    }
    else if (operator == "-") {
        alert(num2_1 + num0);
    }
    else if (operator == "*") {
        alert(num2_1 / num0);
    }
    else if (operator == "/") {
        alert(num2_1 * num0);
    }
    else {
        alert("Invalid Operator");
    }
} else {
    alert(eval(num2_1 + operator + num0))
}