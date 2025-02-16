const display = document.getElementById('display')
let num1String
let num1
let num2


function addNum(num) {
    if (display.innerText[0] == '=') {
        display.innerText = ''
        display.innerText = display.innerText + num
    } else {
        display.innerText = display.innerText + num
    }
}

function apagar() {
    display.innerText = ''
}

function op(operacao) {
    let pc = display.innerText[0]

    if (display.innerText.length == 0) {}
    else if (pc == '+'){}
    else if (pc == '-'){}
    else if (pc == '*'){}
    else if (pc == '/'){}
    else {
        num1String = display.innerText
        num1 = Number(num1String)
        display.innerText = ''
        display.innerText = display.innerText + operacao
    }    
}

function result() {
    if (display.innerText[0] == '+') {
        let num2String = display.innerText
        num2String = num2String.slice(1, num2String.length)
        num2 = Number(num2String)
        let resultado = num1 + num2
        display.innerText = resultado.toFixed(10)
    }

    if (display.innerText[0] == '-') {
        let num2String = display.innerText
        num2String = num2String.slice(1, num2String.length)
        num2 = Number(num2String)
        let resultado = num1 - num2
        display.innerText = resultado.toFixed(10)
    }
    if (display.innerText[0] == '*') {
        let num2String = display.innerText
        num2String = num2String.slice(1, num2String.length)
        num2 = Number(num2String)
        let resultado = num1 * num2
        display.innerText = resultado.toFixed(10)
    }
    if (display.innerText[0] == '/') {
        let num2String = display.innerText
        num2String = num2String.slice(1, num2String.length)
        num2 = Number(num2String)
        let resultado = num1 / num2
        display.innerText = resultado.toFixed(10)
    }

}

