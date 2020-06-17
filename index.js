'use strict';
let isNumber = function (n){
  return !isNaN(parseFloat(n) && isFinite(n));
};

alert("Hi gamer");
alert("Are you ready?");
let number = parseInt(Math.random() * 100+1);



let randomGame = function (randomm) {

  let numb = prompt("Введите число от 1 до 100");
    if (!isNumber(numb) && numb !== null ){
      alert("Введи число!");
       
    }
      else  if(numb > randomm){
        prompt("Загаданное число меньше");
         randomGame(randomm);
    }
        else if(numb < randomm) {
         prompt("Загаданное число больше ");
        randomGame(randomm);
    }
        else {
         alert(`Ураааа!!! Правильно Число: " ${randomm }`);
         return;
        }
        randomGame(randomm);
      };
      

  
randomGame(number);
