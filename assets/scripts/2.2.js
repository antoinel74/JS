var min = prompt("Enter a minimum Value", "0");
var max = prompt("Enter a  max Value", "0");
var current = prompt("Enter your current value", "0");

var nummin = parseInt(min);
var nummax = parseInt(max);
var numcurrent = parseInt(current);

if (nummin >= nummax) {
    alert("Oops, it seems like you didn't get the point. Nvm, have a nice day !");
  } else {
    alert("Your current value is" + numcurrent);
  }