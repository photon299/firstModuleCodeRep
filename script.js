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

//*HM
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

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!');
// }
// &&
if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!');
}
