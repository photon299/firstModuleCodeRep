"use strict";

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


const me = {
    name: "Alex",
    age: 19,
    friends: [],
    "favorite movies": [],
};

for (let i = 0; i < 5; i++) {
    let addFriends = (f) => {
        me.friends[f] = prompt("Add friend", "");
    };
    addFriends(i);
}

console.log(me);