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

let item = " ";
let star = "*";
let lines = 6;
let rowCounter = 6;
let itemResult = "";
let starResult = "";
let res = "";
let mainResult = "";
let box = "";

for (let i = 0; i < lines; i++) {
    for (let j = 0; j <= rowCounter; j++) {
        itemResult += item;
        if (itemResult.length == rowCounter) {
            mainResult += itemResult;
            if (i == 0) {
                mainResult += star;
                console.log(mainResult);
                mainResult = "";
                itemResult = "";
                rowCounter--;
                continue;
            }
            box += star + star;
            mainResult += star + box;
            console.log(mainResult);
            mainResult = "";
            itemResult = "";
            rowCounter--;
        }
    }
}