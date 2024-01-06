// //regular function

function add (num1:number, num2:number):number{
    return num1+num2;
}

console.log(add(2,2))

// //arrow function
const add2 = (num1:number, num2:number):number =>num1+num2
console.log(add2(2,2))


//object and its method

const checkBalance = {
    name: 'Shafia',
    balance: 13,
    addBalance (balance:number):string{
        return `My balance is ${this.balance+balance}`
    }
}

console.log(checkBalance.addBalance(14))


//map

const arr:number[]=[1,4,10]
const newArray:number[] =arr.map((elem:number):number=>elem *elem) 

console.log(newArray)