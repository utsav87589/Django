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

// const prices = [25, 23, 27, 48, 54, 56, 89];

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


//-----------------------JS Objects

// const car1 = {
//     'make' : 'Ford',
//     'model' : 'Mustang 5.0 v8',
//     'year' : 2026,
//     sayCar : (make, model, year) => {console.log(`I drive a ${make} ${model} ${year}`)}
// };

// car1.make = 'Toyota';

// console.log(car1.make);
// console.log(car1.model);
// car1.sayCar(car1.make, car1.model, car1.year);


//-------------------'THIS' keyword

// const car1 = {
//     'make' : 'Toyota',
//     'model' : 'Land Cruiser',
//     'year' : 2026,
//     sayCar : function(){console.log(`I drive a ${this.make} ${this.model} ${this.year}`)}
// };


// console.log(car1.make);
// console.log(car1.model);
// car1.sayCar();


//----------------Constructors

// function Car(make, model, year){
//     this.make = make,
//     this.model = model,
//     this.year = year,
//     this.sayCar = function(){console.log(`I drive a ${this.make} ${this.model} ${this.year}`)}
// };

// const car_mustang = new Car('Ford', 'Mustang 5.0 v8', 2026);

// car_mustang.sayCar();

// console.log(`I drive a ${car_mustang.make} ${car_mustang.model} ${car_mustang.year}`);


//------------------Classes

// class Car{
//     constructor(make, model, year){
//         this.make = make;
//         this.model = model;
//         this.year = year
//     }

//     displayCar(){
//         console.log(`I have a ${this.make} ${this.model} ${this.year}`)
//     }
// }

// const car1 = new Car('Toyota', 'Grand Highlander Limited', 2026);
// const car2 = new Car('Tesla', 'model 3', 2024);

// car1.displayCar();
// car2.displayCar();


//-------------------Static keyword

// class Car{

//     static count = 0;

//     constructor(make, model, year){
//         this.make = make;
//         this.model = model;
//         this.year = year;
//         Car.count++;
//     }

//     static count_cars(){
//         console.log(`There are ${Car.count} cars`);
//     }

//     get_car_info(){
//         console.log(`The car is ${this.make} ${this.model} ${this.year}`);
//     }
// }

// const mustang = new Car('Ford', 'Mustang 5.0 v8 GT premium', 2026);
// const landcruiser = new Car('Toyota', 'Land Cruiser premium', 2026);
// const tesla = new Car('Tesla', 'Model 3 awd long range', 2026);

// mustang.get_car_info();
// landcruiser.get_car_info();
// console.log(tesla.model);
// Car.count_cars();


//------------------------Inheritance

// class Car{
//     isRunning = true;

//     run(){
//         console.log(`${this.model} is running`);
//     }

//     stop(){
//         console.log(`${this.model} is stopping`);
//     }
// }


// class Mustang extends Car{
//     model = 'Mustang 5.0 v8';

//     fast(){
//         console.log(`${this.model} is going over 200mph+`);
//     }
// }

// class Tahoe extends Car{
//     model = 'Tahoe RST';

//     big(){
//         console.log(`${this.model} is very big, confortable and fast as well`);
//     }
// }

// const mustang = new Mustang();
// const tahoe = new Tahoe();

// console.log(mustang.isRunning);
// console.log(tahoe.isRunning);

// mustang.stop();

// mustang.fast();
// tahoe.big();


//-------------------SUPER keyword

// class Car{
//     constructor(make, model){
//         this.make = make;
//         this.model = model;
//     }

//     run(){
//         console.log(`${this.model} is running fast vroom!`)
//     }
// }


// class Mustang extends Car{
//     constructor(make, model, year){
//         super(make, model);
//         this.year = year;
//     }

// }

// class Tahoe extends Car{
//    constructor(make, model, year){
//     super(make, model);
//     this.year = year;
//    }
// }


// const mustang = new Mustang('Ford', 'Mustang 5.0 v8', 2026);
// const tahoe = new Tahoe('Chevrolet', 'Tahoe RST', 2026);

// console.log(mustang.model);
// mustang.run();
// tahoe.run();


//-------------getters and setters


// class Rectangle{

//     constructor(width, height){
//         this.width = width;
//         this.height = height;
//     }

//     set width(newWidth){
//         if (newWidth > 0){
//             this._width = newWidth;
//         }
//         else{
//             console.error('Width must be positive number');
//         }
//     }
//     set height(newHeight){
//         if (newHeight > 0) {
//             this._height = newHeight;
//         }
//         else{
//             console.error('Height must be a positive number');
//         }
//     }

//     get width(){
//         return this._width;
//     }

//     get height(){
//         return this._height;
//     }

// }


// const rectangle = new Rectangle('pizza', 'burger');
// const rectangle = new Rectangle(4, 3);

// console.log(rectangle.width);
// console.log(rectangle.height);


//--------------------Destructuring

// const car = {
//     'make' : 'Toyota',
//     'year' : 2026
// }

// const {make, year, model = 'Camry XSE AWD'} = car;

// console.log(`${make} ${model} ${year}`);

// const numbers = [22, 24, 27, 29];

// const [first, second, third, fourth] = numbers;
// console.log(`${first} ${second} ${third} ${fourth}`)


//------------Nested objects

// const user = {
//     'name' : 'Tommy',
//     'age' : 24,
//     'info' : {
//         'address' : '231 cedar heights Northbay',
//         'occupation' : 'Programmer'
//     }
// }

// console.log(user.name);
// console.log(user.info);
// console.log(user.info.address);

// const {name, info} = user;

// console.log(name);
// console.log(info);


//-------------Array of objects

// let cars = [{'make' : 'Toyota', model : 'Grand Highlander Liimited Hybrid', year : 2026},
//             {'make' : 'Ford', model : 'Mustang GT convertible 5.0 v8', year : 2026},
//             {'make' : 'Honda', model : 'Civic sports hybrid', year : 2026},
//             {'make' : 'Toyota', model : 'Camry XSE AWD', year : 2026},
//             {'make' : 'Tesla', model : 'Model 3 AWD Long Range', year : 2026}
// ];

// cars.forEach(car => console.log(car));


//--------------Sort method is JS

// let cars = [{'make' : 'Toyota', model : 'Grand Highlander Liimited Hybrid', year : 2027},
//             {'make' : 'Ford', model : 'Mustang GT convertible 5.0 v8', year : 2025},
//             {'make' : 'Honda', model : 'Civic sports hybrid', year : 2026},
//             {'make' : 'Toyota', model : 'Camry XSE AWD', year : 2024},
//             {'make' : 'Tesla', model : 'Model 3 AWD Long Range', year : 2023}
// ];

// // cars.sort((a, b) => a.year - b.year);
// cars.sort((a, b) => a.make.localeCompare(b.make));

// console.log(cars);


//------------Shuffling an array

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function shuffle(array){
//     for(let i = array.length - 1; i > 0;i--){
//         const random = Math.floor(Math.random() * (i + 1));
        
//         [array[i], array[random]] = [array[random], array[i]];
//     }
// }

// shuffle(cards);
// console.log(cards);


//---------------- Date objects in JS

// const date = new Date();
// const date = new Date(0);
// const year = date.getFullYear();

// console.log(year);


//----------------- Closures

// function counter(){
//     let count = 0;

//     function inner(){
//         count++;
//         console.log(`count increased to ${count}`);
//     }
    
//     return {inner};
// }

// const count = counter();
// count.inner();
// count.inner();
// count.inner();
// count.inner();
// count.inner();
// count.inner();


//----------------------setTimeout()

// setTimeout( () => {
//     window.alert('Hello');
// }, 5000);


// setTimeout( () => {
//     console.log('Hello JS!');
// }, 5000);


//-------------------ES6 Modules

