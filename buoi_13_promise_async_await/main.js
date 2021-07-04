new Promise(function (resolve, reject) { // *
    setTimeout(() => resolve(1), 1000)
}).then(function (result) { // **
    alert(result); // 1
    return result * 2; // 2
}).then(function (result) { // ***
    alert(result); // 2
    return result * 2; // 4
}).then(function (result) { // ****
    alert(result); // 4
    return result * 2; // 8
})

// 
// example2

let promise = new Promise(function (resolve, reject) { // *
    setTimeout(() => resolve(1), 1000)
});

promise.then(function (result) {
    alert(result); // 1
    return result * 2;
});

promise.then(function (result) {
    alert(result); // 1
    return result * 2;
})

promise.then(function (result) {
    alert(result); // 1
    return result * 2;
})

// example 3
let promise = new Promise(function (resolve, reject) { // *
    setTimeout(() => resolve(1), 1000)
}).then(function (result) { // **
    alert(result); // 1
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(result * 2)); // 2
    })
}).then(function (result) { // ***
    alert(result);
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(result * 2)); // 4
    })
}).then(function (result) { // ****
    alert(result); 
}).catch( e => new Error(e));


// fetch ( promise)
// syntax basic
// let promiseFetchData = fetch(url); // url là link api

let api = 'b7ef181bb0f3b3da54eb8b618c7ae544';
let api2 = 'bfe692d5d322ff7c2eaec64cac9b705a';
let api3 = 'ab6390b400dc18ff693a1b964ac3630a';
// https://gnews.io/api/v4/top-headlines?token=ab6390b400dc18ff693a1b964ac3630a&lang=en
// example fetch api

fetch('https://gnews.io/api/v4/top-headlines?token='+ api + '&lang=en') //Fetch the news from API
.then(function (response) {
    return response.json();
})
.then(function(data){
    console.log(data);   // Sử dụng hàm appendNews để thêm bài báo vô
})
.then(function(){
    // nothing
}).catch(e => console.log(new Error(e)));

// Promise.all
// syntax basic 
// let promise = Promise.all([...promises])

// example
Promise.all([
    new Promise( resolve => setTimeout(() => resolve(1), 1000)),
    new Promise( resolve => setTimeout(() => resolve(2), 2000)),
    new Promise( resolve => setTimeout(() => resolve(3), 3000)),
]).then(alert); // 1,2,3


// example 2
let urls = [
    'https://api.github.com/users/tienvv',
    'https://api.github.com/users/tiendz',
    'https://api.github.com/users/vvtien2'
];

// map in array
// api when successfully return 200
let requestApi = urls.map(url => fetch(url)); // success  
Promise.all(requestApi).then(responses => responses.forEach( // nhạn lại respon về và làm cái gì đó
    res => alert(`${res.url} : ${res.status}`)
));

// example4
Promise.all([
new Promise( resolve => setTimeout(() => resolve(1), 1000)),
new Promise( (resolve, reject) => setTimeout(() => reject(new Error("wrong!!")), 2000)),
new Promise( resolve => setTimeout(() => resolve(3), 3000)),
]).catch(alert); // ? 1 => wrong

Promise.all([
new Promise( resolve => setTimeout(() => resolve(1), 1000)),
new Promise( (resolve, reject) => setTimeout(() => reject(new Error("wrong!!")), 2000)),
new Promise( resolve => setTimeout(() => resolve(3), 3000)),
]).then(alert); // ? 2 => error
// regular function(){} and arrow function () => 
// () => ...
// agr => ... 
// _ => ... 
// _ => 1 +2;

// summary
// Promise xử lí .then/.catch/.finally luôn luôn được gọi là asynchronous
// Môi khi một lời hứa được thực hiện thi các dong then / catch / finally sẽ được
// xử lí 
// Microtasks queue 
// thì queue is first in - first out khi các queue xếp trước thì nó sẽ chạy trước
// 

// 
setTimeout(() => console.log(4), 0 );
console.log(1);
console.log(2);
new Promise((res, rej) => {
    res(console.log(3))
})
new Promise((res, rej) => {
    res(console.log(5))
})

// sync
// ====== buổi sáng => thức dậy => mặc quần áo => đánh răng => ăn sáng // sync
// -------------------8h----------8h10----------8h20---------8h30.

// async / await
// ====== buổi sáng => thức dậy => mặc quần áo => ăn sáng // async
// ==============================> đánh răng=> 
// -------------------------------8h10

// example
async function f(){
    return 1;
}

f().then(alert); // 1

// 

async function f2(){
    return Promise.resolve(1);
}


f2().then(alert); // 1

// wait 
async function f3(){
    let promise = new Promise((res, rej) => {
        setTimeout(() => res("response !"), 2000)
    })

    let result = await promise;  // đợi cho đến khi thằng promise res
    alert(result); 
}

f3();


// example 4
function f4(){
    let promise = Promise.resolve(2);
    let result = await promise; // ?
}

let urls = [
    'https://api.github.com/users/tienvv',
    'https://api.github.com/users/tiendz',
    'https://api.github.com/users/vvtien2'
];

// example call data with async and await
async function showAvatar(pram){
    //read api and fetch
    let respon = await fetch(`https://api.github.com/users/${pram}`);
    let user = await respon.json(); //...
    // hien thi avatar len
    let img = document.createElement('img');
    img.src = user.avatar_url;
    img.className = "width_100";
    document.body.append(img);
    return user;
}

showAvatar('vuvantienhd96');

// API 
// GET   get all data from api
// POST // thêm mới một item to api 
// PUT  // PUT upate một bản ghi trong list data, thêm mới hoặc cập nhập
// DELETE xóa một hoặc nhiều phần tử từ api 


