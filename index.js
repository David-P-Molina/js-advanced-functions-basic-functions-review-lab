// Your code here
function saturdayFun(arg = "roller-skate"){
    return "This Saturday, I want to " + arg + "!"
}
let mondayWork = function(arg = "go to the office") {
    return "This Monday, I will " + arg + "."
}

let wrapAdjective = function(arg = "*"){
    return function(adj = "special"){
        return `You are ${arg}${adj}${arg}!`
    }
}
const Calculator = {
    add: function(a, b){
        return a + b;
    },
    subtract: function(a, b){
        return a - b;
    },
    multiply: function(a, b){
        return a * b;
    },
    divide: function(a, b){
        return a / b;
    }
}
function actionApplyer(startingInteger, array){
let a = startingInteger
for (let i = 0; i < array.length; i++) {
    a = array[i](a)
}
return a
}