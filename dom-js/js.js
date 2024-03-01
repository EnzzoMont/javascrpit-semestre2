// Trazendo prompt-sync para nosso projeto - npm i prompt - sync
const prompt = require('prompt-sync')()


function getUserInfo(){
    let altura = parseFloat(prompt("igite sua altura"))
    let peso = parseFloat(prompt("Digite seu peso"))

    return {
        pesoInformado: peso,
        alturaInformada: altura,        
    }
}

console.log(getUserInfo())

function calcImc(alturaDoUsuario = 1.9, pesoDoUsuario){
    return pesoDoUsuario / alturaDoUsuario**2
}

function main(){
    let peso = getUserInfo().pesoInformado
    let altura = getUserInfo().alturaInformada
    let imc = calcImc(altura,peso)
    console.log(`Seu IMC é ${imc}`)
}


function imprimir(idade){
    console.log(idade)
}

const calcIdade = idade => console.log(idade)

b