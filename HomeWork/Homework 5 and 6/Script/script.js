// Задача 1 Homework 5
let inputNumber = prompt("Введите число:");
let result = parseFloat(inputNumber) * 0.1;
console.log(`10% от введенного числа: ${result}`);






// 2
 let num1 = prompt("Enter first number");

 let num2 = prompt("Enter second number");

if (num1 < num2) {
   console.log(num1);
} else {
  console.log(num2);
 }



// 3


let num = promt('enter the number');

if(num < 100){
    console.log('chislo menshe 100');

}else if (num > 100) {
    console.log('chislo bolishe 100');

}else {
    console.log('chislo ravno 100');
}


//4

 let name = prompt("What is your name?");
 let age = prompt ("How old are you?");
 if(age>18) {
 console.log( `Hello ${name}`)
} else if (age<18) {
    console.log(`Hi ${name}`)
 }





// Homework 6

//1
for(let i=0;i<=10;i+=2){ 
    console.log(i)
}


//2
for(let i=55; i>=20;i--){
console.log(i)
}


//3
const numbers = [3,5,11,2,8,1,6];
for(let i=0; i<numbers.length;i++) {
    console.log(numbers[i]);
}


// Задача 4
const numbers = [3, 5, 11, 2, 8, 1, 6];
const numbers_squared = [];

for (let i = 0; i < numbers.length; i++) {
    numbers_squared.push(numbers[i] ** 2);
}
     console.log(numbers_squared);



//5
const last_elem = numbers_squared[numbers_squared.length - 1];
console.log(last_elem);



// 6
const user = {
    first_name: 'Ivan',
    last_name: 'Ivanov',
    age: 20,
    salary: 500
};

const userString = `User’s name is ${user.first_name} ${user.last_name}. He is ${user.age} years old`;
console.log(userString);

