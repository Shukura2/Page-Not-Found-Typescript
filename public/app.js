"use strict";
//interfaces
const me = {
    name: "ola",
    age: 12,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        return amount;
    }
};
// console.log('he owes me', me.spend(200));
// console.log('he owes me 200');
let someOne;
someOne = {
    name: 'shola',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        return amount;
    }
};
// console.log(someOne.speak('love'));
const greetAgain = (a) => {
    console.log(a.name);
};
greetAgain(someOne);
