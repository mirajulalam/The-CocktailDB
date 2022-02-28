// 1.
const friend = {
    name: 'minhaj Uddin',
    isRich: false,
    money: 5000,
    bestFriend: {
        name: 'kotub Uddin',
        id: 333
    },
    subject: ['bangla', 'Ict', 'Math'],
    treatDay: function (expences, boksis) {
        this.money = this.money - expences - boksis;
        return this.money;
    }
}
const remaning = friend.treatDay(1000, 200)
// console.log('Remaining Balance', remaning)

// 2.
const friends = `${friend.name} ${friend.isRich} ${friend.money} ${friend.bestFriend.id} ${friend.subject[1]}`;
// console.log(friends);
const anotherProperty = Object.keys(friend);
// console.log(anotherProperty[0]);

// 3.1
const number = () => {
    const result = 89;
    return result;
}
const myNumber = number();
// console.log(myNumber)
// 3.2
const divided = num => {
    const totalDivided = num / 7;
    return totalDivided;
}
const myNum = divided(70);
// console.log(myNum)
// 3.3
const divide = (num1, num2) => {
    const sum = num1 + num2;
    const total = sum / 2;
    return total;
}
const totalResult = divide(10, 20);
// console.log(totalResult)
// 3.4
const multiple = (first, second) => {
    const sum1 = first + 7;
    const sum2 = second + 7;
    const sumTotal = sum1 + sum2;
    return sumTotal;
}
const sumResult = multiple(10, 20);
// console.log(sumResult)

// 4.1
const num = [7, 14, 21, 28, 35, 42, 49, 56, 60];
const numbers = num.map(num => num / 7);
// console.log(numbers)
// 4.2
// num.forEach(num => console.log(num))
// 4.3
const biggest = num.filter(number => number > 20);
// console.log(biggest)
// 4.4
const same = num.find(number => number == 35);
// console.log(same)
// 5.1
const phone = {
    name: 'samsung glaxyA20s',
    price: 15000,
    color: 'blue',
    storige: 32
}
const name = (phone.name)
// console.log(name)
// 5.2
const [firstNum, secondNum] = ['first', 'second'];
// console.log(secondNum)
