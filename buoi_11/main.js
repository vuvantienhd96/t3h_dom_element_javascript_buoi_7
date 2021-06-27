// Destructuring assignment
// sừ dụng cho cả object và array

// example
let arr = ["name1", "name2"];

// Destructuring assignment
// sets firtItem =  arr[0] // firtItem = "name1"
// and secondItem = arr[1] // secondItem = "name2"

// we can do it
let [firtItem, secondItem] = arr; 
console.log("firtItem", firtItem);
console.log("secondItem", secondItem);

// example
let [a, b, c] = "abc"; // ["a", "b", "c"]
console.log(a); // a
console.log(b); // b
console.log(c); // c

// example
let [name3, name4] = "viet nam".split(" ");
console.log(name3); // viet
console.log(name4); // name

// example 3
let [firstName, ,title] = ["tien", "hanoi", "vietname","quehuong"];
console.log("title", title); // vietname

// merge destructuring with rest

let arrSample =[1,2,3] // rest
let arr2Sample = [...arrSample]; // [1, 2, 3]

let [name1, name2, ...titles] = ["tienvv", "lanvv", "vuvv", "vietvv", "vietvv1"]
console.log(titles[0]); // tienvv
console.log(titles.length); // 3

// not set value
let [firstName, secondName] = [];
// let firstName; // undefined
console.log(firstName); // undefined
console.log(secondName); // undefined

// default value

let [firstName = "tienvv", secondName = "secondName"] = ["vietnam"];
console.log(firstName); // vietnam
console.log(secondName); // secondName

// object destructuring
// basic syntax: let {var1, var2} = {var1:..., var2:...}
let listObject = {
    hand: "4",
    color: "black",
    weight: "1kg"
}

let {hand, color, weight} = listObject
// hand: 4
// color: black
console.log(hand);
console.log(color);

let {hand: h, color: c, weight} = listObject
console.log(h); // 4
console.log(c); // black

// default object 
let options = {
    class1: 123
};

let { count: c = 40, address: a = 'taynam', class1 } = options;
console.log(c);// 40
console.log(a); // // taynam
console.log(class1); // 123

// nested object
let obj = {
    size: {
        width: 1,
        height: {
            weight: 2,
            height: {

            }
        },
    },

}

// nested destructuring
let {
    size: {
        width,
        height,
    },
    ietems: [item1, item2]
} = obj;

console.log(obj); // 1
console.log(height); // 2

// any quesitons

// class and function 
// extent kế thừa contructure
// syntax basic
// F.prototype
let animal = {
    eats: true
}

function Cat(name){
    // contructure
    // khởi tạo phương thức xong cho thằng Cat với name

}
// prototype
Cat.prototype = animal; 
let catOne = new Cat("gâu gâu"); // catOne.__proto__ == animal
let catTwo = new Cat("mew mew");
console.log(catOne.eats); // true

// example 2
function Dog(age) {
    this.age = age;
}

let dogOne = new Dog(1); // 1
let dogTwo = new dogOne.contructor(2); // 2 

// truoc kia khong co class thì mình hay dùng kiểu như này để kế thừa và khởi tạo
// phương thức mới
// class basic syntax
// class MyClass {
//     // class methods
//     contructor() {....}
//     // methods
//     method1(){...}
//     method2(){...}
//     ...
// } 

// example
class ListUser {
    
    // contructure
    contructor(name, age, phoneNumber, address){
        this.name = name;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.address = address;
    }
    // method
    getNumber(){
        console.log(this.name);
    }

}

let userOne = new ListUser("tienvv", 25, 096, "hn");
userOne.getNumber(); // tienvv
// một object với tên userOne
// constructor sẽ chạy và đưa vào các biến được gán it với từ khóa this
// let userOne = {
//     name: "tienvv",
//     age: 25, 
//     phoneNumber: 096,
//     address : "hn",
//     getNumber: function() {
//         console.log(this.name);
//     }
// }

class User {
    contructor(name){
        this.name = name;
    }

    get name(){
        return this._name;
    }ơ

    set name(value) {
        if(value.length < 3) {
            console.log("tên quá ngắn");
            return;
        }
        this._name = value;
    }
}

let user = new User("tienvv");
console.log(user.name); // tienvv
user = new User(""); // ?


class Animal {
    constructor(name){
        this.name = name;
        this.speed = 0;// default value 
    }
    run(speed) {
        this.speed = speed;
        this.render();
        console.log(`${this.name} runs with speed is ${this.speed}`);
    }
    // render(){
    //     // return về cái dông hồ
    //     get gio phút giây 
    //     nối chuỗi vao và hiển thị lên
    // }
    stop(){
        
        this.speed = 0;
        console.log(`${this.name} not run`);
    }
}

let animal = new Animal("cat");

class Bird extends Animal{
    constructor(name){
        super(name);
    }
    sleep(){
        console.log(`${this.name} sleeping`);
    }
}

let chimse = new Bird("chimse");
console.log(chimse.run(30, "sasd")); // chimse runs with speed is 30

// 
let date = new Date(); // 
// class Clock viet môt function khai báo một template và (render) xuất ra
// giá trị là giờ của máy tính mình nếu giờ hours < 10 thì biến giờ '0' + hours
// phút                                     minutes < 10 thì minutes = '0' + minutes
// second                                   second < 10 thì second = '0' + second
// start() and stop()  render()
// log output 

// 














