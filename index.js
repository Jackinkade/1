'use strict';
let isNumber = function (n){
  return !isNaN(parseFloat(n) && isFinite(n))
};

alert("Hi gamer");
alert("Are you ready?");
const getRandomNum = function (min, max) {
    min = Math.floor(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max + min + 1)) + min;
};
 let random = getRandomNum(1, 100);

let randomGame = function (random) {
  let i = Boolean;
  let numb = prompt("Введите число от 1 до 100");
    if (!isNumber(numb) && numb !== null ){
      alert("Введи число!");
       
    }else if (random){
        if(numb > random){
        prompt("Загаданное число меньше");
        return randomGame(getRandomNum(1, 100));
    }
        else if(numb < random) {
         prompt("Загаданное число больше ");
         return randomGame(getRandomNum(1, 100));
    }
        else {
         alert("Ураааа!!! Правильно");
        }
      }
  };
randomGame(getRandomNum(1, 100));
 alert('Спрятанное число: ' + random);
