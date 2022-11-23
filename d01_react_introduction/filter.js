//Zwracam nową tablicę złożoną z tych elementów, przy których iterator zwrócił true

const users = ["adam", "bogdan", "czarek", "darek"];

const nameWith6Letter = users.filter(user => user.length === 6)
console.log(nameWith6Letter); //["bogdan", "czarek"]

const nameWithLetterK = users.filter(user => {
    return (
        user.indexOf("k") > -1
    )
});

console.log(nameWithLetterK);
//["czarek","darek"]