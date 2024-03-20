document.querySelector(".btn").addEventListener('click', e => {
  e.preventDefault();
  const peso = document.querySelector('#peso').value;
  const altura = document.querySelector('#altura').value;

  if (peso == "" || altura == "" || isNaN(peso) || isNaN(altura)) {
    document.querySelector('.error').classList.add('showError');
    setTimeout(() => {
      document.querySelector('.error').classList.remove('showError');
    }, 2500);
    document.querySelector('#peso').focus();
  }
  else {
    let result = peso / Math.pow(altura, 2);
    document.querySelector(".alert").classList.add("show");
    document.querySelector(".bg").classList.add("show-bg");

    document.querySelector(".bg").onclick = () => {
      document.querySelector(".alert").classList.remove("show");
      document.querySelector(".bg").classList.remove("show-bg");
    }

    if (document.querySelector('#fem').checked === true) {
      if (result >= 39.1) {
        document.querySelector("#result").innerHTML = `<b>IMC: ${result.toFixed(1)}</b> <br> Obesidade mórbida! Mulher com risco alto de AVC. Procure um endocrinologista urgente para verificar sua saúde cardíaca, níveis de colesterol, triglicerídeos e açúcar no sangue.`;
      }
      else if (result >= 29.1) {
        document.querySelector("#result").innerHTML = `<b>IMC: ${result.toFixed(1)}</b> <br> Obesidade moderada! Procure um endocrinologista urgente para verificar sua saúde cardíaca, níveis de colesterol, triglicerídeos e açucar no sangue. Mulher com risco de infarto iminente.`;
      }
      else if (result >= 24.1) {
        document.querySelector("#result").innerHTML = `<b>IMC: ${result.toFixed(1)}</b> <br> Obesidade Leve! Garota, precisa fazer exercícios físicos e ajustar sua dieta para não engordar mais. Procure um endocrinologista urgente...`;
      }
      else if (result >= 19.1) {
        document.querySelector("#result").innerHTML = `<b>IMC: ${result.toFixed(1)}</b> <br> Peso normal! Parabéns, você está muito gata. Continue assim...`;
      }
      else {
        document.querySelector("#result").innerHTML = `<b>IMC: ${result.toFixed(1)}</b> <br> Abaixo do Peso! Procure um endocrinologista e nutricionista para montar um programa nutricional para você.`;
      }
    }
    else if (document.querySelector('#masc').checked === true) {
      let result = peso / Math.pow(altura, 2);
      if (result >= 40) {
        document.querySelector("#result").innerHTML = `<b>IMC: ${result.toFixed(1)}</b> <br> Obesidade mórbida! Homem com risco alto de AVC. Procure um endocrinologista urgente para verificar sua saúde cardíaca, níveis de colesterol, triglicerídeos e açúcar no sangue.`;
      }
      else if (result >= 30.1) {
        document.querySelector("#result").innerHTML = `<b>IMC: ${result.toFixed(1)}</b> <br> Obesidade moderada! Procure um endocrinologista urgente para verificar sua saúde cardíaca, níveis de colesterol, triglicerídeos e açucar no sangue. Homem com risco de infarto iminente.`;
      }
      else if (result >= 25.1) {
        document.querySelector("#result").innerHTML = `<b>IMC: ${result.toFixed(1)}</b> <br> Obesidade Leve! Garoto, precisa fazer exercícios físicos e ajustar sua dieta para não engordar mais. Procure um endocrinologista urgente...`;
      }
      else if (result >= 20) {
        document.querySelector("#result").innerHTML = `<b>IMC: ${result.toFixed(1)}</b> <br> Peso normal! Parabéns, você está muito gato. Continue assim...`;
      }
      else {
        document.querySelector("#result").innerHTML = `<b>IMC: ${result.toFixed(1)}</b> <br> Abaixo do Peso! Procure um endocrinologista e nutricionista para montar um programa nutricional para você.`;
      }
    }
  }
})

document.querySelector('.trash').addEventListener('click', e => {
  e.preventDefault();
  document.querySelector('#peso').value = "";
  document.querySelector('#altura').value = "";
  document.querySelector("#result").innerText = "";
  document.querySelector('#peso').focus();
})
