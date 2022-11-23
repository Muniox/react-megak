const customers = [
    { name: "Adam", age: 67 },
    { name: "Basia", age: 27 },
    { name: "Marta", age: 17 },
];

const isUsersAdult = customers.findIndex(customer.age < 18);
console.log(isUsersAdult); //2

const firstAdultUser = customers.find(customer.age >= 18);
console.log(firstAdultUser); // {name: "Adam", age: 67}