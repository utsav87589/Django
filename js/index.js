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