"use strict";
// //regular function
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(2, 2));
// //arrow function
const add2 = (num1, num2) => num1 + num2;
console.log(add2(2, 2));
//object and its method
const checkBalance = {
    name: 'Shafia',
    balance: 13,
    addBalance(balance) {
        return `My balance is ${this.balance + balance}`;
    }
};
console.log(checkBalance.addBalance(14));
//map
const arr = [1, 4, 10];
const newArray = arr.map((elem) => elem * elem);
console.log(newArray);
