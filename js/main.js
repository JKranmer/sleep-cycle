// Logia de calculo Ciclo do sono
import {transformTime, calcTime} from './sleep-cycle.js';

// Evento de click
const btn =  document.querySelector('button')
btn.addEventListener('click', () => {
  const starOrEndSleep = document.querySelector('#start-sleep').value;
  const qtd = document.querySelector('#qt-cicle').value;
  let calcTimes = calcTime(qtd);
  atualizarDados(transformTime(qtd), starOrEndSleep, calcTimes);
})

//  ====== ***  Atualição dos cards  *** =======  //
const atualizarDados = (timeSleep, starOrEndSleep, toSleepOrWakeUp) => {
  printResult(1,timeSleep);
  printResult(2,starOrEndSleep);
  printResult(3,toSleepOrWakeUp);
}
const printResult = (index, time) =>{
  const resultado = document.querySelector('#resultado .resume__item:nth-child('+index+')>h2')
  resultado.innerText = time;
}


// Tratamento de nomemclatura
const Radio = document.querySelectorAll('[type="radio"]');

Radio.forEach(element => {
  element.addEventListener('click', (event) => {
    const textInput = document.querySelector('.texto>span');
    const textResult = document.querySelector('#resultado .resume__item:nth-child(2)>div>span')
    const textToSleepOrWakeUp = document.querySelector('#resultado .resume__item:nth-child(3)>div>span')
    if (event.target.value == 'start') {
      textInput.innerHTML = textResult.innerHTML = " dormir:";
      textToSleepOrWakeUp.innerHTML = "acordar"
    } else {
      textInput.innerHTML = textResult.innerHTML = " acordar:";
      textToSleepOrWakeUp.innerHTML = "dormir"
    }
  })
});
