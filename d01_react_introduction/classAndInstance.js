//deklaracja klasy
class City {

}

//tworzenie instancji klasy
const Warsaw = new City();

const NewYork = new City();

//Powstają dwa (różne niepołączone) obiekty będące instancją City.
//City{}

// Klasa - wlaściwości instancji i prototyp
// class Country {
//     constructor(name, capital, population) {
//         this.name = name;
//         this.capital = capital;
//         this.population = population;
//     }
// }

// const poland = new Country('Polska', 'Warszawa', 38000000);

//Country { name: "Polska", capital: "Warszawa", population: 38000000}


class Country {
    constructor(name) {
        this.name = name; //właściwość każdej instancji
        this.showName = () => console.log(this.name); //metoda każdej instancji
    }
    //Wszystkie metody tworzone w klasie znajdują się w prototypie klasy, do której dostęp mają wszystkie instancje.
    showCountryName() {
        console.log(`Nazwa kraju to ${this.name}`)
    }
}

const Poland = new Country('Polska');
const Italy = new Country('Włochy');

Poland.showCountryName(); //Nazwa kraju to Polska
Italy.showCountryName(); //Nazwa kraju to Włochy
Poland.showName(); //Polska
Italy.showName(); //Włochy
