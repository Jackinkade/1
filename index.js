'use strict';
let isNumber = function (n){
  return !isNaN(parseFloat(n) && isFinite(n));
};

alert("Hi gamer");
alert("Are you ready?");
const getRandomNum = function (min, max) {
    min = Math.floor(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max + min + 1)) + min;
};
 let randomm = getRandomNum();

let randomGame = function (randomm) {

  let numb = prompt("Введите число от 1 до 100");
    if (!isNumber(numb) && numb !== null ){
      alert("Введи число!");
       randomGame(randomm);
    }else if (randomm){
        if(numb > randomm){
        prompt("Загаданное число меньше");
         randomGame(randomm);
    }
        else if(numb < randomm) {
         prompt("Загаданное число больше ");
         randomGame(randomm);
    }
        else {
         alert(`Ураааа!!! Правильно Число: " ${randomm }`);
        }
      }
  };
randomGame(getRandomNum(1, 100));
