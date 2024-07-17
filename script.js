const nome = document.getElementById('nome')
const altura = document.getElementById('altura')
const peso = document.getElementById('peso')
const botao = document.getElementById('botaoCalcular')
const botao2 = document.getElementById('botaoLimpar')
const result = document.getElementById('result')
let valor;

const toggleButton = () => {
    botao2.classList.toggle('hide')
    result.classList.toggle('hide')
    botao.classList.toggle('hide')
}


function calcular(altura, peso){
    valor = (peso / (altura**2)).toFixed(1)
    return valor
}

botao.addEventListener('click', (e) => {
    e.preventDefault();
    let valorNome = nome.value
    let valorAltura = altura.value
    let valorPeso = peso.value
    if(valorAltura && valorPeso && valorNome){ //validacao
        calcular(valorAltura, valorPeso)
        let classificacao;
        //alert(valor)
            if(valor < 17){
                classificacao = 'muito abaixo do peso'
            } else if(valor >= 17 && valor < 18.4){
                classificacao = 'abaixo do peso'

            } else if(valor >= 18.5 && valor < 25){
                classificacao = 'peso ideal' 

            } else if(valor >= 25 && valor < 30){
                classificacao = 'acima do peso'

            } else if(valor >= 30 && valor < 35){
                classificacao = 'obesidade grau I'

            } else if(valor >= 35 && valor < 40){
                classificacao = 'obesidade grau II'
                
            } else if(valor >= 40){
                classificacao = 'obesidade grau III'

            } else{
                classificacao = 'preencha as informações corretamente!' 
            }
        result.innerText = `Olá. ${valorNome}, tudo bem? Seu IMC é ${valor}, e como você pesa ${peso.value} kg, isso pode ser considerado como ${classificacao.toUpperCase()}`
        toggleButton();
    } 
})

botao2.addEventListener('click', (e) => {
    toggleButton();
    nome.value = ''
    altura.value = ''
    peso.value = ''
})

