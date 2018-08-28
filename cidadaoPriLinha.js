//criar uma forma literal 
function fun1() {}

//Armazenar em uma variavel 

const fun2 = function () {}

//armazenar em uma array 

const array = [function ( a, b) {return a + b }, fun1, fun2 ]
console.log(array [0](2, 3))

//funçao pode retornar/conter um funçao 

function soma (a,b) {
    return function (c) {
        console.log(a+b+c)
    }
}
soma (2, 3)  (4)