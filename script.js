"use strict";

//? 20. Условия
// if (1) {
//     console.log("Ok");
// } else {
//     console.log("Error");
// }

// if (num < 49) {
//     console.log("Error");
// } else if (num > 100) {
//     console.log("Too much");
// } else {
    // console.log("Ok")
// }

// (num == 50) ? console.log("Ok") : console.log("Error");

// const num = 46;
// switch(num) {
//     case 49:
//         console.log("Maybe");
//         break;
//     case 100:
//         console.log("tOO MUCH");
//         break;
//     case 50:
//         console.log("That's it");
//         break;
//     default:
//         console.log("Not today");
//         break;
// }

// const me = {
//     name: "Alex",
//     age: 19,
//     friends: [],
//     "favorite movies": [],
// };

// for (let i = 0; i < 5; i++) {
//     let addFriends = (f) => {
//         me.friends[f] = prompt("Add friend", "");
//     };
//     addFriends(i);
// }

// console.log(me);


//? 21. (д) Логические операторы
// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries) {
//     console.log("I'm hungry no more");
// }

// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && "ccdxw");

// if (hamburger === 3 && cola === 1 && fries) {
//     console.log("Everyone're full");
// } else {
//     console.log("We're leaving");
// }


// let johnReport, alexReport, mariaReport = 'done';
// console.log(johnReport || alexReport || mariaReport);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// console.log(hamburger === 3 && (cola === 2 || fries === 3) && nuggets);

// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
//     console.log("Everyone're happy");
// } else {
//     console.log("We're leaving");
// }

// console.log(!0);

//*Tasks
// console.log( NaN || 2 || undefined ); // 2
// console.log( NaN && 2 && undefined ); // NaN
// console.log( 1 && 2 && 3 ); // 3
// console.log( !1 && 2 || !3 ); // false
// console.log( 25 || null && !3 ); // 25
// console.log( NaN || null || !3 || undefined || 5); // 5
// console.log( NaN || null && !3 && undefined || 5); // 5
// console.log( 5 === 5 && 3 > 1 || 5); // true

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!');
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!');
// }
// &&
// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!');
// }


//? 22. Циклы
// let num = 50;

// while (num <= 55) {
    // console.log(num);
    // num++;
// }

// do {
    // console.log(num);
    // num++;
// } while(num <= 55);

// for (let i = 1; i < 8; i++) {
//     console.log(num);
//     num++;
// }


//? 23. (д) Цикл и цикле и метки
// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// }

// let star = "*";
// for (let i  = 0; i < 7; i++) {
//     console.log(star);
//     star += "*";
// }

// let result = "";
// let rowLength = 7;

// for (let i = 1; i < rowLength; i++) {
//     for (let j = 0; j < i; j++) {
//         result += "*";
//     }
//     result += "\n";
// }
// console.log(result);

// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) { continue first; }
//             console.log(`Third level: ${k}`);
//         }
//     }
// }

//*Tasks
// const firstTask = () => {
//     let num = 5;
//     for (num; num <= 10; num++) {
//         console.log(num);
//     }
// };
// firstTask();

// const secondTask = () => {
//     for (let i = 20; i >= 10; i--) {
//         if (i === 13) { break; }
//         console.log(i);
//     }
// };
// secondTask();

// const thirdTask = () => {
//     for (let i = 2; i <= 10; i++) {
//         if (i % 2 !== 0) { continue; }
//         console.log(i);
//     }
// };
// thirdTask();

// const fourthTask = () => {
//     let i = 2;
//     while(i <= 16) {
//         if (i % 2 === 0) {
//             i++;
//             continue;
//         }
//         console.log(i);
//         i++;
//     }
// };
// fourthTask();

// const fifthTask = () => {
//     const arrayOfNumbers = [];
//     let arrItem = 5;
//     for (let itemPosition = 0; itemPosition <= 5; itemPosition++) {
//         arrayOfNumbers[itemPosition] = arrItem;
//         arrItem++;
//     }
//     console.log(arrayOfNumbers);
// };
// fifthTask();

// const sixthTask = () => {
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     for (let i = 0; i < arr.length; i++) {
//         result[i] = arr[i];
//     }
//     console.log(result);
// };
// sixthTask();

// const seventhTask = () => {
//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     for (let i = 0; i < data.length; i++) {
//         if (typeof data[i] == "number") {
//             data[i] *= 2;
//         } else {
//             data[i] += " - done";
//         }
//     }
//     console.log(data);
// };
// seventhTask();

// const eighthTask = () => {
//     const data = [5, 10, "Shopping", 20, "Homework"];
//     const result = [];

//     for (let i = 0; i < data.length; i++) {
//         result[i] = data[data.length - i - 1];
//     }
//     console.log(result);
// };
// eighthTask();


//* Triangle
// let result = "";
// let lines = 6;

// let item = " ";
// let star = "*";
// let rowCounter = 6;
// let itemResult = "";
// let starResult = "";
// let box = "";

// for (let i = 0; i < lines; i++) {
//     for (let j = 0; j <= rowCounter; j++) {
//         itemResult += item;
//         if (itemResult.length == rowCounter) {
//             result += itemResult;
//             if (i == 0) {
//                 result += star;
//                 console.log(result);
//                 result = "";
//                 itemResult = "";
//                 rowCounter--;
//                 continue;
//             }
//             box += star + star;
//             result += star + box;
//             console.log(result);
//             result = "";
//             itemResult = "";
//             rowCounter--;
//         }
//     }
// }


//? 25. Функции, стрелочные функции (ES6)
// const showFirstMessage = (text) => {
//       console.log(text);
// };
// showFirstMessage("Heloo");

// const calc = (a, b) => {
//     return a + b;
// };

// console.log(calc(4, 6));
// console.log(calc(1, 2));
// console.log(calc(5, -19));

// const ret = () => {
//     let num = 50;
//     return num;
// };
// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function() {
//     console.log("Hellog")
// };

// const calc = (a, b) =>  a + b;
// console.log(calc(3, 5));

//? 26. (д) Еще раз про аргументы функций
// const usdCurr = 28;
// const eurCurr = 32;

// const convert = (curr, ammount) => {
//     console.log(curr * ammount);
// };

// convert(usdCurr, 500);
// convert(eurCurr, 500);


//? 27. (д) Про важность return
// const usdCurr = 28;
// const discount = 0.9;

// const convert = (curr, ammount) => {
//     return curr * ammount;
// };

// const promotion = (result) => {
//     console.log(result * discount);
// };

// const res = convert(usdCurr, 500);
// promotion(res);

// const test = () => {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//         if (i === 3) { return; } 
//     }
//     console.log("Hey");
// };
// test();

// function doNothing() {}
// console.log(doNothing() === undefined);

//* Задание на работу с функциями
// const sayHello = (name) => {
//     return "Привет, " + name + "!";
// };

// const returnNeighboringNumbers = (number) => {
//     return [number - 1, number, number + 1];
// };

// const getMathResult = (num, counter) => {
//     if (typeof counter != "number" || counter <= 0) {
//         return num;
//     } else {
//         let result = "";
//         let numClone = num;
//         for (let i = 0; i < counter; i++) {
//             if (i == 0) {
//                 result += numClone;
//                 continue;
//             }
//             numClone += num;
//             result += "---" + numClone;
//         }
//         return result;
//     }
// };


//? 28. Методы и свойства строк и чисел
// const str = "test";
// const arr = [1, 2, 3];
// let strUp = str.toUpperCase();
// console.log(strUp);

// const fruit = "Some fruit";
// console.log(fruit.indexOf("fruit"));

// const logg = "Hello world!";
// console.log(logg.slice(6, 11));
// console.log(logg.substring(6, 11));
// console.log(logg.substr(6, 5));

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// console.log(parseFloat(test));


//* (*) Продвинутые задания на использование функций
// V = a*a*a
// SA = 6а2
// const calculateVolumeAndArea = (a) => {
//     if (a % 1 === 0 && typeof a == "number" && a > 0) {
//         console.log(`Объем куба: ${a * a * a}, площадь всей поверхности: ${6 * (a * a)}`);
//     } else {
//         console.log("При вычислении произошла ошибка");
//     }
// };
// calculateVolumeAndArea();

// const getCoupeNumber = (num) => {
//     if (typeof num !== "number" || num < 0 || num % 1 !== 0) {
//         console.log("Ошибка. Проверьте правильность введенного номера места");
//     } else if (num === 0 || num > 36) {
//         console.log("Таких мест в вагоне не существует");
//     } else {
//         const arr = [
//             [1, 2, 3, 4],
//             [5, 6, 7, 8],
//             [9, 10, 11, 12],
//             [13, 14, 15, 16],
//             [17, 18, 19, 20],
//             [21, 22, 23, 24],
//             [25, 26, 27, 28],
//             [29, 30, 31, 32],
//             [33, 34, 35, 36],
//         ];
//         for (let i = 0; i < 9; i++) {
//             for (let j = 0; j < 4; j++) {
//                 if (arr[i][j] === num) {
//                     console.log(i + 1);
//                     break;
//                 }
//             }
//         }
//     }
// };
// getCoupeNumber("dd");

// const getTimeFromMinutes = (min) => {
//     if (typeof min !== "number" || min % 1 !== 0 || min < 0) {
//         console.log("Ошибка, проверьте данные");
//     } else  {
//         let hours = parseInt(min / 60);
//         let minutes = min % 60;
//         if (hours === 0 && minutes === 0) {
//             return "Это 0 часов и 0 минут";
//         } else if (hours === 1) {
//             return `Это ${hours} час и ${minutes} минут`;
//         } else if (hours <= 4) {
//             return `Это ${hours} часа и ${minutes} минут`;
//         } else if (hours <= 10) {
//             return `Это ${hours} часов и ${minutes} минут`;
//         }
//     }
// };
// console.log(getTimeFromMinutes(6));

// const findMaxNumber = (a, b, c, d) => {
//     const arr = [a, b, c, d];
//     let max = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] !== "number") {
//             return 0;
//         } else if (max < arr[i]) {
//             max = arr[i];
//         }
//     }
//     return max;
// };
// console.log(findMaxNumber(44, 2, 313, 4.6));


//? (**) Задача с собеседований на числа Фибоначчи
// const fib = (num) => {
//     if (typeof num !== "number" || num % 1 !== 0 || num < 0 || num === 0) {
//         return "";
//     } else if (num === 1) {
//         return "0";
//     } else {
//         let a = 0;
//         let b = 1;
//         let nextNum;
//         let result = "0 1"; 
//         for (let i = 0; i < num - 2; i++) {
//             nextNum = a + b;
//             result += ` ${nextNum}`;
//             a = b;
//             b = nextNum;
//         }
//         return result;
//     }
// };
// console.log(fib(13));



//? 30. Метод str.trim()
// let str = "    skskdk kdkssd  ";
// let newStr = str.trim();
// console.log(newStr);


//? 31. Callback- функции
// const first = () => {
//     setTimeout(() => {
//         console.log(1);
//     }, 500);
// };

// const second = () => {
//     console.log(2);
// };
// first();
// second();

// const done = () => {
//     console.log("I've completed this lesson");
// };

// const learnJS = (lang, callback) => {
//     console.log(`I'm learning ${lang}`);
//     callback();
// };

// learnJS("JavaScript", done);


//?32. Объекты, деструктуризация объектов (ES6)
// const options = {
//     name: "test",
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: "black",
//         bg: "red",
//     },
//     makeTest: () => {
//         console.log("Test");
//     },
// };

// options.makeTest();

// console.log(Object.keys(options).length);

// console.log(options.name);
// delete options.name;
// console.log(options);

// let counter = 0;
// for (let key in options) {
//     if (typeof options[key] === "object") {
//         for (let i in options[key]) {
//         console.log(`Свойство ${i}, значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key}, значение ${options[key]}`);
//     }
//     counter++;
// }
// console.log(counter);

//* Деструктуризация
// const options = {
//     Name: "test",
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: "black",
//         bg: "red",
//     },
//     makeTest: () => {
//         console.log("Test");
//     },
// };

// const {Name, ...rest} = options;

// console.log(Name);
// console.log(rest);


//? 33. Массивы и псевдомассивы
// const numbers = [1, 2, 3, 6, 8];

// arr.pop();
// arr.push(10);
// console.log(arr);

// for (let item of arr) {
//     console.log(item);
// }

// numbers.forEach((item, index, array) => {
//     console.log(`${index}: ${item} in the array ${array}`);
// });

// const evenNumbers = numbers.filter(item => item % 2 === 0);
// console.log(evenNumbers);

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join("; "));

// const numbers = [4, -43, 87.4, 0.23, -3];
// numbers.sort((a, b) => a - b);
// console.log(numbers);


//? 35. Передача по ссылке или по значению, Spread оператор (ES6-ES9)
// let a = 5,
//     b = a;
// b += 5;
// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1,
// };
// const copy = obj;
// copy.a = 10;
// console.log(copy);
// console.log(obj);


// const copy = (mainObj) => {
//     let objCopy = {};

//     for (let key in mainObj) {
//         objCopy[key] = mainObj[key];
        
//     }
//     return objCopy;
// };

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4,
//     }
// };

// const newNumbers = copy(numbers);
// newNumbers.a = 10;
// console.log(newNumbers);

// const add = {
//     d: 17,
//     e: 20,
// };
// const clone = Object.assign({}, add);
// clone.d = 20;
// console.log(add);
// console.log(clone);

// const oldArray = ["a", "b", "c"];
// const newArray = oldArray.slice();
// newArray[1] = "sss";
// console.log(newArray);
// console.log(oldArray);
//* spread
// const video = ["youtube", "vimeo", "rutube"],
//       blogs = ["wordpress", "livejournal", "blogger"],
//       internet = [...video, ...blogs, "vk", "facebook"];
// console.log(internet);

// const log = (a, b, c) => {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// };
// const num = [2, 5, 7];
// log(...num);

// const array = ["a", "b"];
// const newArray = [...array];
// console.log(newArray);

// const q = {
//     one: 1,
//     two: 2,
// };
// const newObj = {...q};
// console.log(newObj);


//? Задачи на работу с объектами
// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%',
//             java: '50%',
//             "c++": '83%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: (obj) => {
//         return `Мне ${obj.age} и я владею языками ${obj.skills.languages.join(" ").toUpperCase()}`;
//     },
// };
// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

// const showExperience = (plan) => {
//     const {exp} = plan.skills;
//     return exp;
// };
// console.log(showExperience(personalPlanPeter));

// const showProgrammingLangs = (plan) => {
//     const {programmingLangs} = plan.skills;
//     let result = "";
//     for (let key in programmingLangs) {
//         result += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
//     }
//     return result;
// };
// console.log(showProgrammingLangs(personalPlanPeter));

//? Задачи на работу с массивами
// const family = ["Peter", "Ann", "Alex", "Linda"];
// const showFamily = (arr) => {
//     return (arr.length === 0) ? "Семья пуста" : "Семья состоит из: " + arr.join(" ");
// };
// console.log(showFamily(family));

// const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];
// const standardizeStrings = (arr) => {
//     arr.forEach(item => console.log(item.toLowerCase()));
// };
// standardizeStrings(favoriteCities);

//? Задачи на работу с массивами, часть 2
// const someString = "Дракула"; //This is some strange string
// const reverse = (str) => {
//     if (typeof str !== "string") {
//         return "Ошибка!";
//     } else {
//         let newStr = "";
//         let oldStrCounter = str.length - 1;
//         for (let i = 0; i < str.length; i++) {
//             newStr += str[oldStrCounter];
//             oldStrCounter--;
//         }
//         return newStr;
//         // return str.split("").reverse().join("");
//     }
// };
// console.log(reverse(someString));

// const baseCurrencies = [];//"USD", "EUR",
// const additionalCurrencies = [];//"UAN", "RUB", "CNY"
// const availableCurr = (arr, missingCurr) => {
//     if (arr.length === 0) {
//         return "Нет доступных валют";
//     } else {
//         let str = "Доступные валюты:\n";
//         for (let item of arr) {
//             if (item !== missingCurr) {
//                 str += item + "\n";
//             }
//         }
//         return str;
//     }
// };
// console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], "CNY"));


//? 36. Основы ООП, прототипно-ориентированное наследование
// let str = "some";
// let strObj = new String(str);
// console.log(typeof strObj);

// console.dir([1, 2, 3]);

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: () => {
//         console.log("Hello");
//     }
// };

// const john = {
//     health: 100
// };
//* __proto__
// john.__proto__ = soldier;
// console.log(john.armor);
// john.sayHello();

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: () => {
//         console.log("Hello");
//     }
// };

// const john = Object.create(soldier, {
//     weapons: {
//         knife: true,
//         "AK-47": true,
//         RPG: false,
//     }
// });
// console.log(john.weapons);

// const john = {
//     health: 100
// };

// Object.setPrototypeOf(john, soldier);
// john.sayHello();


//? Продвинутая задача на работу с объектами и массивами
// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5,
//         },
//         {
//             width: 15,
//             length: 7,
//         },
//         {
//             width: 8,
//             length: 10,
//         },
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000,
// };

// const isBudgetEnough = (data) => {
//     let totalArea = 0;
//     for (let item of data.shops) {
//         let keysArr = Object.keys(item);
//         for(let i = 0; i < keysArr.length; i++) {
//             totalArea += item[`${keysArr[i]}`] * item[`${keysArr[i + 1]}`];
//             i++;
//         }
//     }
//     //                 totalVolume 
//     let price = (totalArea * data.height) * data.moneyPer1m3; 
//     return (data.budget >= price) ? "Бюджета достаточно" : "Бюджета недостаточно";
// };
// console.log(isBudgetEnough(shoppingMallData));

// const students = [
//     "Peter", "Andrew", "Ann", "Mark", "Josh",
//     "Sandra", "Cris", "Bernard", "Takesi", "Sam",
// ];
// const sortStudentsByGroups = (arr) => {
//     arr.sort();
//     const result = [],
//           amm = Math.floor(arr.length / 3);
//     for (let i = 0; i < amm; i++) {
//         result[i] = arr.splice(0, 3);
//     }
//     result[result.length] = `Оставшиеся студенты: ${arr.length === 0 ? `-` : arr.join(", ")}`;
//     return result;
// };
// console.log(sortStudentsByGroups(students));


//? 38. Отлавливаем ошибки в своем коде при помощи консоли разработчика. Breakpoints
// const hello = () => {
//     console.log("Hello World");
// };
// hello();

// const hi = () => {
//     console.log("Say hi!");
// };

// hi();

// const arr = [1, 14, 4, 30, 54],
//       sorted = arr.sort((a, b) => a - b);
// console.log(sorted);

//? 39. Динамическая типизация в JS
//* To String
// const num = 5;
// console.log("https://vk.com/catalog/" + num);

// const fontSize = 26 + "px";
//* To Number
// console.log(typeof(+"5"));

//* To Boolean
// let switcher = null;
// if (switcher) {
//     console.log("Working...");
// }
// switcher = 1;
// if (switcher) {
//     console.log("Working...");
// }


//? 40. Замыкание и лексическое окружение
// let number = 5; debugger;
// const logNumber = () => {
//     let number = 4; debugger;
//     console.log(number);
// };
// number = 6;

// logNumber(); debugger;

// const createCounter = () => {
//     let counter = 0;
//     const myFunction = function() {
//         counter += 1;
//         return counter;
//     };
//     return myFunction;
// };

// const increment = createCounter();
// const c1 = increment();
// const c2 = increment();
// const c3 = increment();


// console.log(c1, c2, c3);


//? 41. Задачи с собеседований на понимание основ
// let x = 5;
// console.log(x++);

// console.log([] + false - null + true);

// let y = 1;
// let x = y = 2;
// console.log(x);

// console.log(typeof([] + 1 + 2));

// console.log("1"[0]);

// console.log(2 && 1 && null && 0 && undefined);

// console.log((4 && 2));
// console.log(!!(4 && 2));

// console.log(null || 2 && 3 || 4);

// let a = [1, 2, 3],
//     b = [1, 2, 3];
// console.log(a == b);

// console.log(+"Infinity");

// console.log("яжик" > "Ублоко");

// console.log(0 || "" || 2 || undefined || true || false);


//? Задания на поиск ошибок в коде
// const restorantData = {
//     menu: [
//         {
//             name: 'Salad Caesar',
//             price: '14$'
//         },
//         {
//             name: 'Pizza Diavola',
//             price: '9$'
//         },
//         {
//             name: 'Beefsteak',
//             price: '17$'
//         },
//         {
//             name: 'Napoleon',
//             price: '7$'
//         }
//     ],
//     waitors: [
//         {name: 'Alice', age: 22}, {name: 'John', age: 24}
//     ],
//     averageLunchPrice: '20$',
//     openNow: false
// };

// function isOpen(prop) {
//     let answer = '';
//     answer = prop ? 'Открыто' : 'Закрыто';
//     return answer;
// }
// console.log(isOpen(restorantData.openNow));

// function isAverageLunchPriceTrue(fDish, sDish, average) {
//     console.log(+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)));
//     if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < average.slice(0, -1)) {
//         return 'Цена ниже средней';
//     } else {
//         return 'Цена выше средней';
//     }
// }
// console.log(isAverageLunchPriceTrue(restorantData.menu[1], restorantData.menu[3], restorantData.averageLunchPrice));

// function transferWaitors(data) {
//     const copy = Object.assign({}, data);

//     copy.waitors[2] = {name: 'Mike', age: 32};
//     return copy;
// }

// transferWaitors(restorantData);


//? 42. Получение элементов со страницы
const box = document.getElementById("box");
console.log(box);

const buttons = document.getElementsByTagName("button");
console.log(buttons[0]);

const circles = document.getElementsByClassName("circle");
console.log(circles);

const hearts = document.querySelectorAll(".heart");
hearts.forEach(item => console.log(item));

const oneHeart = document.querySelector(".heart");
console.log(oneHeart);