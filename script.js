// create a class that extends the Animal class and includes a method
// that the class can only use

class Animal {
    constructor(name, height, weight){
        this.name = name;
        this.height = height;
        this.weight = weight;
    }

    printName(){
        console.log(`The name of this animal is ${this.name}`);
    }
    showHeight(){
        console.log(`The height of this animal is ${this.height}`);
    }
    showWeight(){
        console.log(`The weight of this animal is ${this.weight}`);
    }
}

// Bird class extends Animal class
class Bird extends Animal{
    constructor(name, height, weight, flight){
        super(name, height, weight);
        this.flight = flight; // flight property is a boolean that
                            // says whether the bird can fly or not
                            // flight = true means it can fly
                            // flight = false means it can't fly
    }

    // checkFlight method tells us whether the bird can fly or not
    checkFlight(){ 
        if(this.flight){ // if this bird flies
            console.log(`${this.name}s fly!`);
        }else{ // this bird doesn't fly
            console.log(`${this.name}s are flightless!`);
        }
    }
}

const penguin = new Bird("Penguin", "4\' 1\"", "30lbs", false);
console.log(penguin);
penguin.checkFlight();

const robin = new Bird("Robin", "7\"", "1lb", true);
console.log(robin);
robin.checkFlight();
