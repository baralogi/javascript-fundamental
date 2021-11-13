class Cat {
    constructor(name){
        this.name = name
        this.color = 'Orange';
    }

    printName() {
        console.log(`Cat name is ${this.name}`);
    }

    walk() {
        console.log(`${this.name} sedang berjalan`);
    }
}   

class Dog {
    constructor(name){
        this.name = name
        this.color = 'Orange';
    }

    printName() {
        console.log(`Dog name is ${this.name}`);
    }

    walk() {
        console.log(`${this.name} sedang berjalan`);
    }
} 


const cat = new Cat()
cat.name = 'Oka'
cat.printName();

const dog = new Dog()
dog.name = 'Alfiyan'
dog.printName();


