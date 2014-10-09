class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    moves(meters: number) {
        alert(this.name + " moves " + meters + "m");
    }
}

var tom = new Person("Tom", 30);
tom.moves(5); 