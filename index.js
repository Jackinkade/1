'use strict';
let isNumber = function (n){
  return !isNaN(parseFloat(n) && isFinite(n))
};
alert("Hi gamer");
alert("Are you ready?");
let random = function (answer) {
  let numb = prompt("Введите число от 1 до 100");
    if (!isNumber(numb) && numb !== null ){
      alert("Введи число!");
        random(21);
    }else if (answer){
        if(numb < answer){
          alert("Загаданное число меньше");
            random(21)
    }
        else if(numb > answer) {
          alert("Загаданное число больше ")
            random(21)
    }
        else {
            alert("Ураааа!!! Правильно")
    }
    }
  };

random(21);