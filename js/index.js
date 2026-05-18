// console.log('Hello JS! once again');

// window.alert('Revising the JS in the middle of project haha!');

// document.getElementById('myH2').textContent = 'JS Tutorials';
// document.getElementById('myP').textContent = 'Was making the LSTM based project, but then the need of using a library for each task grew so much that now I am revising the JS to save some time then complete the project and later be in the game with the React as well!';

// let name = 'Utsav' ;

// console.log(`Your name is ${name}`)

// let username;

// document.getElementById('button').onclick = function(){
//     username = document.getElementById('text').value;
//     document.getElementById('myH2').textContent = `Hello ${username}`;
// };

// username = window.prompt('Enter username')
// document.getElementById('myH2').textContent = `Hello ${username}`;

// randomNum = Math.floor(Math.random() * 6) + 1;
// console.log(randomNum)

// let age = 68;

// if(age <= 18){
//     console.log('you cannot drive');
// }
// else if(age > 18 && age <= 65){
//     console.log('you can drive');
// }
// else{
//     console.log('Enjoy your life');
// }


// let age = 22;

// age >= 18 ? console.log('You can drive') : console.log('You cannot driver sorry!');

// let isStudent = true;
// let isStudent = false;
// let message = isStudent ? 'Yes' : 'No'
// console.log(message)

// let username = 'Utsav ';
// console.log(username.repeat(3))


// let full_name = 'Utsav Kundu';

// first_name = full_name.slice(0, full_name.indexOf(' '));
// last_name = full_name.slice(full_name.indexOf(' ') + 1);

// console.log(`Your first name is ${first_name} and last name is ${last_name}`)


// let int = 1;

// while(int <= 10){
//     console.log(int);
//     int++ ;
// }

// for(let i = 0; i <= 10; i++){
//     console.log(i)
// }

// let min = 50;
// let max = 100;

// let random = Math.floor(Math.random() * ((max - min) + 1) + min);
// console.log(min)
// console.log(max)
// console.log(random)


//-----------------Number guessing game

// let attempts = 0;
// let running  = true;
// let answer = Math.floor((Math.random() * 100) + 1);

// while(running){
//     let guess = window.prompt('Enter a number between 1 and 100');

//     if (guess < answer){
//         window.alert('The guess is too low');
//     }
//     else if(guess > answer){
//         window.alert('The guess is too high');
//     }
//     else{
//         window.alert(`Congrats the answer is ${answer}, it took you ${attempts} attempts to guess it`);
//         running = false;
//     }
//     attempts ++;
// }


//----------------------arrays

// let arr = ['apple', 2, false, '3.14'];

// console.log(arr);
// console.log(typeof(arr));

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }



//--------------------spread operator

// let numbers = [1, 2, 3, 4, 5]

// console.log(...numbers)
// let fruits = ['kiwi', 'papaya', 'oranges'];
// let vegetables = ['potato', 'sweet potato', 'carrots'];

// let food = [...fruits, ...vegetables, 'tofu'];
// console.log(food)


//---------------rest parameter
// function get_foods(...foods){
//     console.log(foods);
// }

// food1 = 'burger';
// food2 = 'pizza';
// food3 = 'poutine';
// food4 = 'dosa';

// get_foods(food1, food2, food3, food4);


//-----------------------Dice roller program

// let random_num = Math.floor((Math.random() * 6) + 1);
// console.log(random_num)

// let random_num1 = Math.floor((Math.random() * 6) + 1);
// let random_num2 = Math.floor((Math.random() * 6) + 1);
// let random_num3 = Math.floor((Math.random() * 6) + 1);
// let random_num4 = Math.floor((Math.random() * 6) + 1);

// let numbers = [random_num1, random_num2, random_num3, random_num4];
// console.log(numbers);


// let num_of_dices = window.prompt('Enter number of dices you want to roll');
// let numbers = [];

// for (let i = 0; i < num_of_dices; i++){
//     let random_num = Math.floor((Math.random() * 6) + 1);
//     numbers.push(random_num);
// }

// window.alert(`the output of the dices are : ${numbers}`)


//----------------------Callbacks

// function sum(callback, x, y){
//     let result = x + y;
//     callback(result);
// }

// function display_sum(result){
//     console.log(result);
// }

// sum(display_sum, 1, 2);


//-----------------foreach() method

// let numbers = [1, 2, 3, 4, 5];

// function double(element, index, array){
//     array[index] = element * 2;
// }

// numbers.forEach(double);
// console.log(numbers);

// let fruits = ['oranges', 'papaya', 'strawberries', 'kiwis'];

// function capitialise(element, index, array){
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }

// fruits.forEach(capitialise);
// console.log(fruits);


//-------------------map() method

// let students = ['jack', 'oggy', 'bob'];

// function upperCase(element){
//     return element.toUpperCase();
// }

// const newStudents = students.map(upperCase);

// console.log(students);
// console.log(newStudents);


//------------------filter() method

// let numbers = [1, 2, 3, 4, 5, 6, 7];

// function isEven(element){
//     return element % 2 === 0;
// }

// const evenNumbers = numbers.filter(isEven);
// console.log(numbers);
// console.log(evenNumbers);


//-----------------reduce() method

const prices = [25, 23, 27, 48, 54, 56, 89];

// function total(accumulator, element){
//     return accumulator + element;
// }

// const total_price = prices.reduce(total);
// console.log(prices);
// // console.log(total_price);

// function maxPrice(previous, next){
//     return Math.max(previous, next);
// }

// const max_price = prices.reduce(maxPrice);
// console.log(prices);
// console.log(max_price);


//--------------------function expressions

// setTimeout(function(){
//     console.log('Hello');
// }, 5000);

// const numbers = [3, 2, 5, 6, 4, 5, 8, 9, 5, 4];

// const squares = numbers.map(function(element){
//     return Math.pow(element, 2);
// });

// const even = numbers.map(function(element){
//     return element % 2 === 0;
// });

// console.log(numbers);
// console.log(squares);
// console.log(even);


//----------------------Arrow functions

// const numbers = [3, 2, 5, 6, 4, 5, 8, 9, 5, 4];

// const squares = numbers.map((element) => {
//     return Math.pow(element, 2);
// });

// const even = numbers.map((element) => {
//     return element % 2 === 0;
// });

// const odd = numbers.filter((element) => {
//     return element % 2 !== 0;
// });

// console.log(numbers);
// console.log(squares);
// console.log(even);
// console.log(odd);