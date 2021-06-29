console.log("hello world @");

// overriding a method in class

// class Animal {
//     constructor(){

//     }

//     eat() {
//         console.log("animal ...something !");
//     }
// }

// class Bird extends Animal {
//     constructor(){
//         // super();
//     }

//     eat() {
//         console.log('Bird...something!');
//     }

// }

// // create a bird
// let bird = new Bird();
// bird.eat(); // Bird...something!

// arrow function
class Animal {
    constructor(info){
        this.speed = 0;
        this.info = info;
    }

    eat() {
        console.log("animal ...something !");
    }

    fly(speed) {
        this.speed =  speed;
        alert(`${this.info} runs with ${this.speed} !`);
    }

    stop(){
        this.speed = 0;
        alert(`${this.info} is standby`);
    }
}

class Bird extends Animal {
    constructor(){
        // super();
    }

   hidden(){
       alert(`${this.info} hides!`)
   }

   stop(){
    super.stop(); // call method Animal stop
    this.hidden(); // ẩn con chim đi 
   }
}

// create a bird
let bird = new Bird("angry bird");
bird.fly(10); // angry bird runs with 10
bird.stop(); // angry bird is standby angry bird hides!

// example 2
class BirdTwo extends Animal {
    stop(){
        setTimeout(function() {
            super.stop();
        }, 1000) ;
    }
}

let birdTwo = new BirdTwo("bombom");
birdTwo.stop(); // 


// bài tập về nhà
class Familly {
    static plant = "eats something";
    constructor(name, speed) {
        this.name = name;
        this.speed =  speed;
    }
    run(speed = 0){
        this.speed += speed;
        alert(`${this.name} runs ${this.speed}`);
    }

    static compare(famillyOne, famillyTwo){
        return famillyOne.speed - famillyTwo.speed;
    }
}

class Julia extends Familly {
    hidden(){
        alert(`${this.name} is hiddens`);
    }

}

let julias = [
    new Julia("Julia is Junia", 10),
    new Julia("Julia is not Junia", 5)
]

julias.sort(Julia.compare); // ? why
julias[0].run() // ? why
Julia.plant; // ? why
// ========class end=============

// call back in javascript

// basic syntax


function callback(value){
    console.log("is something", value);
}

function callSomething(pramOne, callback){
    // do something...
    let sum = 2 + pramOne;
    return callback(sum);
}

callSomething(1, callback);
