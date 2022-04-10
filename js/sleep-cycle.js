// Quantas horas de sono dormidas
export const transformTime = (quantidade) => {
  let time =  new Date(calcularQuantidadeCicloSono(quantidade) * 60000).toISOString().substr(11,5);
  console.log(time);
  return time;
}

const calcularQuantidadeCicloSono = (qtd) => {
  let cicle = 90;
  return cicle*qtd;
}

// Calculo quando Acordar ou quando dormir
export const calcTime =  (quantidade) => {
  const starOrEndSleep = timeStartProcess();
  const quantidadeDormida = calcularQuantidadeCicloSono(quantidade); // em minutos

  // Validador
  const Radio = document.querySelectorAll('[type="radio"]');
  if(Radio[0].checked){
    // Ir dormir - Soma
    starOrEndSleep.setMinutes(starOrEndSleep.getMinutes() + quantidadeDormida);
  } else {
    // Acordar - Tira
    starOrEndSleep.setMinutes(starOrEndSleep.getMinutes() - quantidadeDormida);
  }

  return starOrEndSleep.toISOString().substr(11,5)
}

// Tratamento de Tempo início
const timeStartProcess = () =>{
  const starOrEndSleep = document.querySelector('#start-sleep').value;
  const timeArray = tratamentoTime(starOrEndSleep)
  let h = parseInt(timeArray[0]);
  let m = parseInt(timeArray[1]);

  const date = new Date(0);
  console.log(date.toISOString().substr(11,5) + ' Antes');

  date.setHours(date.getHours() + h)
  date.setMinutes(date.getMinutes() + m)

  console.log(date.toISOString().substr(11,5) + ' Depois');
  return date

}

// Separador hora e minuto
const tratamentoTime = (time) => {
  let valores = time.split(':');
  return valores;
}
