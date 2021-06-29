function fetchScript(srcParam, callBack){
    // khơi tạo một element script
    let script = document.createElement('script'); 
    script.src =  srcParam;
    script.onload = () => callBack(script); // sucsses
    // script.onerror = () => callback(new Error(`script not load ${src}`)); // error

    document.head.append(script);
}
// nhìn function bên dưới và cho a nhận xét về nó 
fetchScript('https://code.jquery.com/jquery-3.6.0.js', function(script) {
    alert(`yeah, you can get script :D${script.src} `);
    // callback step two
    fetchScript('./main.js', function(script){
        alert(`you has been callbacks function ${script}`);
        // callback step three
        fetchScript('./mainTwo.js', function(script){
            // ......
        })

    }); // callback hell (hạn chế sử dung callback này nữa)
    // vì dễ sinh ra lỗi và khó handle (xử lí)
})

// if(success){
//     if(success){
//         if(success){

//         }else {

//         }
//     }
// }
// code smell

// callback in callback
// callback hell 
// tầng tầng lớp lớp trồng lên nhau ,, dẫn đến việc maintain và debug khó khăn
function fetchScript(srcParam, callBack){
    // khơi tạo một element script
    let script = document.createElement('script'); 
    script.src =  srcParam;
    // sucsses
    script.onload = () => callBack(script); 
    // error
    script.onerror = () => callback(new Error(`script not load ${src}`)); 
    document.head.append(script);
}

fetchScript('https://code.jquery.com/jquery-3.6.0.js', function(error, script) {
    if(error){
        // xử lí lỗi
        // ...
    }else {
        // script load success
        // do some thing
        let a = 1 +2;
        fetchScript("https://code.jquery.com/jquery-3.6.0.js", () =>{})
    }
})

// example 
loadApi('apiSomething', step1);

// log an error
function handleError(error){
    return new Error(`you have an error is ${error}`)
}

function step1(error, newApi){
    if(error){
        handleError(error);
    }else{
        loadApi('api2', step2)
    }
}

function step2(error, newApi){
    if(error){
        handleError(error);
    }else{
        loadApi('api3', step3)
    }
}
// same same đệ quy trong c++

// promise in javascript
// basic syntax
let promise = new Promise(function(resolve, reject){
    // executor 
})


// resolve(value) - if the job is finished successfully with result value
// reject(error) - if an error has occurred, return error

// class Animal {
//     run(){
//         console.log('something...');
//     }
// }

//  let animal = new Animal(); /// not run
//  animal.run();


let promise = new Promise(function(resolve, reject){
    // executor 
})

// lời hứa đã được hứa và chờ thưc thi
// state - initialy "pending" , then changes to either "fulfilled" when resolve í called
// reject  - error show

// example resolve
let promiseOne = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve(console.log('get success !!'))
    }, 1000);
});

// exmaple reject
let promiseTwo = new Promise(function(resolve, reject){
    setTimeout(() => {
        reject( new Error("something wrong !!"))
    }, 1000);
});

// example aboth
let promiseThree = new Promise(function(resolve, reject){
    resolve(console.log('get success !!')); // get success !!
    reject(new Error("...something...wrong")); // ignored
    setTimeout(() => {
        resolve(console.log("get successfully")); // // ignored
    }, 1000);
});

// then, catch , finally
// syntax
// promise.then(
//     function(result) {
//         // xử lí kết quả khi thành công
//     },
//     function(error){
//         // xử lí lỗi khi xảy ra
//     }
// )

// example1
let promiseForThen = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve("done!");
    }, 1000);
});

promiseForThen.then(
    result => alert(result), // done!
    error => alert(error) // doen't run
)

// example2
let promiseForThenTwo = new Promise(function(resolve, reject){
    setTimeout(() => {
        reject(new Error("wrong"));
    }, 1000);
});

promiseForThen.then(
    result => alert(result), // doen't run
    error => alert(error) // wrong
)
// example3
let promiseForThenThree = new Promise(function(resolve){
    setTimeout(() => {
        resolve("done three");
    }, 1000);
});

promiseForThenThree.then(alert); //done three

// catch
let promiseForCatch = new Promise(function(resolve, reject){
    setTimeout(() => {
        reject(new Error("wrong"));
    }, 1000);
});

promiseForCatch.catch(alert);

// finally
// syntax basic
new Promise((rel, rej) => {
    // do something
}).finally(() => console.log("something...."))

// catch
new Promise((resolve, reject) => {
    throw new Error("error");
}).finally(() => alert("promise ready")).catch(err => alert(err));


// bai tập về nhà thứ 2
function fetchScript(srcParam, callBack){
    // khơi tạo một element script
    let script = document.createElement('script'); 
    script.src =  srcParam;
    script.onload = () => callBack(script); // sucsses
    script.onerror = () => callback(new Error(`script not load ${src}`)); // error

    document.head.append(script);
}

// btvv là convert function fetchScript bên trên thành một function dạng 
// promise có hai trạng thái là resolve and reject không
function fetchScript(src){
    return new Promise(result, reject) {
        // do something
        //.....
    }
}



