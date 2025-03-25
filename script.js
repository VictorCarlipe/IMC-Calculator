//declaração
const iWeight = document.getElementById("weight")
const iHeight = document.getElementById("height")

const ctResult = document.getElementById("result")
const pResult = document.getElementById("pg-result")
const pClassification = document.getElementById("pg-class")

const bCalc = document.getElementById("calc")
const bReset = document.getElementById("reset")

let spIMC = null

function fnCalcIMC(){
    //verifica se os valores de peso e altura são válidos
    if (!iWeight.value){
        iWeight.focus()
        alert("Necessário informar o peso!")
        return
    }else if (!iHeight.value){
        iHeight.focus()
        alert("Necessário informar a altura!")
        return
    }

    //processamento
    let vlIMC = Number(iWeight.value) / Math.pow(iHeight.value / 100, 2)
    pResult.textContent += vlIMC.toFixed(2)

    //classificação
    if (vlIMC >= 15 && vlIMC <= 18.5){
        spIMC = document.getElementById("IMC1")
    }else if (vlIMC >= 18.6 && vlIMC <= 24.9){
        spIMC = document.getElementById("IMC2")
    }else if (vlIMC >= 25 && vlIMC <= 29.9){
        spIMC = document.getElementById("IMC3")
    }else if (vlIMC >= 30 && vlIMC <= 39.9){
        spIMC = document.getElementById("IMC4")
    }else if (vlIMC >= 40){
        spIMC = document.getElementById("IMC5")
    }

    //saída
    if (spIMC){
        let spClassIMC = document.createElement("span")
        let spContent = spIMC.textContent.split(":")

        spClassIMC.classList.add("detach")
        spClassIMC.textContent = spContent[1]

        spIMC.classList.add("detach")
        pClassification.appendChild(spClassIMC)
    }else{
        pClassification.classList.add("detach")
        pClassification.textContent = "Resultado fora do intervalo!"
    }
    
    ctResult.classList.remove("disappear")
    bCalc.classList.toggle("disappear")
    bReset.classList.toggle("disappear")
}

function fnReset(){
    //limpa os inputs inseridos pelo usuário
    iWeight.value = ""
    iHeight.value = ""

    //modifica classes de resultados
    ctResult.classList.add("disappear")

    if (spIMC){
        spIMC.classList.toggle("detach")
        spIMC = null
    }

    //aplica valor padrão de elementos
    pResult.innerHTML = "Resultado do IMC: "
    pClassification.innerHTML = "Você se encontra em"

    //alterna classe dos botões
    bCalc.classList.toggle("disappear")
    bReset.classList.toggle("disappear")
}