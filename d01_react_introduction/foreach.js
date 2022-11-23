const usersAge = [20,21,23,43];



//=====

usersAge.forEach(age => console.log(`W przyszłym roku uzytkownik będzie miał ${age + 1} lat`))



//=====
let usersTotalAge = 0;

usersAge.forEach( age => usersTotalAge += age);
console.log(usersTotalAge); //zmienna zawiera wartość 107