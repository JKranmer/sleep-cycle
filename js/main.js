const btn =  document.querySelector('button')

btn.addEventListener('click', () => {
  const startSleep = document.querySelector('#start-sleep');
  const quantidade = document.querySelector('#qt-cicle');
  calculo(startSleep.value, quantidade.value);
})

const inputType = document.querySelectorAll('[type="radio"]');

inputType.forEach(element => {
  element.addEventListener('click', (event) => {
    const text = document.querySelector('.texto');
    if (event.target.value == 'start') {
      text.innerHTML = "Hora de dormir";
    } else {
      text.innerHTML = "Hora de acordar";
    }
  })
});


  // Functions
  const calculo = (time, qt) => {
    let minutos = 30 * qt;
    let horas = 1 * qt;

    duracaoSono(horas, minutos);

    timeEnd(horas, minutos, time)

  }

  const timeEnd = (h, m, time) => {
    const timeFinal = tratamentoTime(time);
    if(inputType[0].checked){
      h += parseInt(timeFinal[0]);
    } else {
      h = parseInt(timeFinal[0]) - h;
    }
    m += parseInt(timeFinal[1]);

    const arrayTime = convercaoMinHoras(m);
    if(inputType[0].checked){
      h += arrayTime[0];
    } else {
      h -= arrayTime[0];
    }

    const arrayTratamento = tratamento24h(h, arrayTime[1]);
    printResult(arrayTratamento[0], arrayTratamento[1], 3);
  }

  const printResult = (h, m, index) =>{
    const resultado = document.querySelector('#resultado .resume__item:nth-child('+index+')>h2')

    resultado.innerText = h+':'+m;
  }

  const tratamentoTime = (time) => {
    let valores = time.split(':');
    return valores;
  }

  const duracaoSono = (h, m) => {
    const arrayTime = convercaoMinHoras(m);
    h += arrayTime[0];
    printResult(h, arrayTime[1], 1);
  }

  const convercaoMinHoras = (m) =>{
    const resultado = [];
    let minutos = m;
    let talvezHora = minutos/60;
    if(talvezHora >= 1){
      resultado.push(parseInt(talvezHora));
    } else {
      resultado.push(0);
    }

    minutos = minutos%60;

    resultado.push(minutos);

    return resultado;
  }

  const tratamento24h = (h, m) =>{
    const resultado = [];
    if(h >= 24){
      h -= 24;
      resultado.push(h);
    } else if(h < 0 ) {
      h = 24 + h;
      resultado.push(h);

    } else {
      resultado.push(h);
    }
    if(m < 0) {
      m = m*(-1);
      resultado.push(m)
    } else {
      resultado.push(m)
    }
    return resultado;
  }
