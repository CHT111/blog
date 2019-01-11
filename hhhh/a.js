// // 通过回调函数获取数据的方法，如fs.readFile
// function readFile(url, data, callback) {
//     setTimeout(() => {
//         callback(url + ':' + data)
//     }, 1000);
// }


// // 将回调函数改在函数外边，方便实现控制权的转换
// function chunk(fn) {
//     return function (...args) {
//         return function (callback) {
//             fn(...args, callback)
//         }
//     }
// }

// var readFileTrunk = chunk(readFile)

// function* get() {
//     var a = yield readFileTrunk('./a.html', 1)
//     console.log(a)
//     var b = yield readFileTrunk('./b.html', 2)
//     console.log(b)
//     var c = yield readFileTrunk('./c.html', 3)
//     console.log(c)
// }

// // 实现
// function done(func) {
//     var fun = func()
//     function next(a) {
//         var i = fun.next(a)
//         if (!i.done) {
//             i.value(function (a) {
//                 next(a)
//             })
//         }
//     }
//     next()
// }
// done(get)






// // promise版本
// function readFile(url, data) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             resolve(url + ':' + data)
//         }, 1000);
//     })
// }
// function* get() {
//     var a = yield readFile('./a.html', 1)
//     console.log(a)
//     var b = yield readFile('./b.html', 2)
//     console.log(b)
//     var c = yield readFile('./c.html', 3)
//     console.log(c)
// }

// function done() {
//     var fun = get()
//     function next(a) {
//         var i = fun.next(a)
//         if (!i.done) {
//             i.value.then(function (a) {
//                 next(a)
//             })
//         }
//     }
//     next()
// }

// done()


var values = [1, 2, 3, 4, 5];
var sum = values.reduce(function (prev, cur, index, array) {
    console.log(prev, cur, index, array)
    return cur
});


