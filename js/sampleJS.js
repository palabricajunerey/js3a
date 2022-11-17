

// document.getElementById("demo").innerHTML = "Hello World 123!";
// document.getElementById('demo').style.backgroundColor = 'yellow';


function changeBGcolor() {
  document.getElementById("demo").style.backgroundColor = "aquamarine";
}

function checkDate() {
  document.getElementById("demo").innerHTML = Date();
}



//variables
var name = "juan";
var age = 21;

let a = 10;
let b = "text";

const c = 12;

let s = true;

console.log("My first name is: " + name + " and my age is: " + age);

//   Basic Operators  
//   + Addition  
//   - Subtraction  
//   * Multiplication  
//   / Division   
//   % Modulus (remainder)  
//   ++ Increment numbers  
//   -- Decrement numbers 

console.log(5 - 2);
console.log(5 * 2);
console.log(5 / 2);
console.log(5 % 2);
console.log(6 % 2);

// Comparison Operators  
// == Equal to  
// === Equal value and equal type  
// != Not equal  
// !== Not equal value or not equal type  
// > Greater than  
// < Less than  
// >= Greater than or equal to  
// <= Less than or equal to  
// ? Ternary operator

console.log(1 == "1");
console.log(1 === "1");

//conditional statements
//if
//if else
// if esleIf else
//switch
//for loop
///while loop

function myFunction() {
  let text;
  // if (confirm("Press a button!") != false) {
  //   text = "You pressed OK!";
  // } else {
  //   text = "You canceled!";
  // }
  confirm("Press a button!") != false ? text = "You pressed OK!" : text = "You canceled!"
  console.log(text);
}

let num1 = 5 ; num2 = 2;

if((num1 + num2) == 3){
  console.log("1st condition");
}else if(num1 < num2){
  console.log("2nd condition");
}else{
  console.log("3rd condition");
}