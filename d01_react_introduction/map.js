const users = ["adam", "bogdan", "czarek", "darek"];

const usersFirstLetterUpperCase = users.map(user => user[0].toUpperCase());

console.log(usersFirstLetterUpperCase); // ["A","B", "C", "D"]

const numbers = [2, 3, 4];
const doubleNumber = numbers.map(number => number * 2);
console.log(doubleNumber);