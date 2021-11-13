class Cat{
    constructor(){
        this.name = 'Garfield',
        this.color = 'Orange',
        this.height = 25,
        this.weight = 4
    }

    walk(){
        console.log(`${this.name} sedang berjalan`);
    }

    run(){
        console.log(`${this.name} sedang berlari`);
    }

    sleep(){
        console.log(`${this.name} sedang tidur`);
    }
}

const cat = new Cat();
cat.walk();