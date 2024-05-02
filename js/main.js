const calcImcBtnField = document.querySelector('#calc-imc-btn')
const alturaField = document.querySelector('input[name=altura]')
const pesoField = document.querySelector('input[name=peso]')
const warningField = document.querySelector('#warning')
const imcField = document.querySelector('#imc')
const transitionTime = 400

function bmiResult(peso, altura, sexo) {
    const imc = peso / altura ** 2;
  
    switch (sexo) {
      case 'feminino':
        switch (true) {
          case imc < 19.1:
            return 'Abaixo do Peso';
          case imc < 25.8:
            return 'Peso Normal';
          case imc < 27.3:
            return 'Marginalmente Acima do Peso';
          case imc < 32.3:
            return 'Acima do Peso Ideal';
          default:
            return 'Obeso';
        }
      default:
        switch (true) {
          case imc < 20.7:
            return 'Abaixo do Peso';
          case imc < 26.4:
            return 'Peso Normal';
          case imc < 27.8:
            return 'Marginalmente Acima do Peso';
          case imc < 31.1:
            return 'Acima do Peso Ideal';
          default:
            return 'Obeso';
        }
    }

}

function validValues(altura, peso) {
    return !(isNaN(altura) || altura == 0 || isNaN(peso) || peso == 0)
}

const border = {
    'Abaixo do Peso': 'border border-warning bg-warning text-white',
    'Peso Normal': 'border border-sucess bg-success text-white',
    'Marginalmente Acima do Peso': 'border border-warning bg-warning text-white',
    'Acima do Peso Ideal': 'border border-warning bg-warning text-white',
    'Obeso': 'border border-danger bg-danger text-white'
}

function showBorder(resultado) {
    setTimeout(function () {
      imcField.className = `form-control form-control-lg ${border[resultado]}`
    }, transitionTime)
}

function hideBorder() {
    setTimeout(function () {
      imcField.className = 'form-control form-control-lg'
    }, transitionTime)
}


const warningMessage = 
  `<div class="alert alert-warning" role="alert">
      <strong>Informe o peso e a altura corretamente.</strong>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>`



function showWarningMessage() {
  warningField.innerHTML = warningMessage
}

function hideWarningMessage() {
    warningField.innerHTML = ''
    imcField.className = 'form-control form-control-lg text-black'
}


function calculadoraDeIMC(){
    let altura = alturaField.value.replace(',','.')
    let peso = pesoField.value.replace(',','.')
    let sexo = document.querySelector('input[name=sexo]:checked').value
    let resultado = ''

    if(validValues(altura, peso)) {
        resultado = bmiResult(peso, altura, sexo)
        hideWarningMessage()
        showBorder (resultado)
    } else {
        showWarningMessage()
        hideBorder()
    }

    imcField.value = resultado
}

calcImcBtnField.addEventListener('click', function(event) {
  event.preventDefault()
  calculadoraDeIMC()
})

document.body.addEventListener('keydown', function(event) {
  if(event.key == "Enter"){
    event.preventDefault()
    calculadoraDeIMC()
  }
})

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      alturaField.value = '';
      pesoField.value = '';
    }
})
    



    

    
  