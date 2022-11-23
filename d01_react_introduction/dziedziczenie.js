class Person {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(`Imię osoby to ${this.name}`);
    }
}

class Student extends Person {
    constructor(name = "", degrees = []) {
        super(name);
        this.degrees = degrees;
    }

    showDegrees() {
        const completed = this.degrees.filter(degree => degree > 2);
        console.log(`student ${this.name} ma stopnie: ${this.degrees} i zaliczył już ${completed.length} przedmiotów`);
    }
}

const Janek = new Student("Adam", [2, 3, 4, 5, 2, 3])
Janek.showDegrees() // Student Adam ma stopnie: 2,3,4,5,2,3 i zaliczył już 4 przedmiotów