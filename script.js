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
        if(parseInt(resultado) != parseFloat(resultado)){
            display.innerText = resultado.toFixed(5)
        } else {
            display.innerText = resultado
        }
    }

    if (display.innerText[0] == '-') {
        let num2String = display.innerText
        num2String = num2String.slice(1, num2String.length)
        num2 = Number(num2String)
        let resultado = num1 - num2
        if(parseInt(resultado) != parseFloat(resultado)){
            display.innerText = resultado.toFixed(5)
        } else {
            display.innerText = resultado
        }
    }
    if (display.innerText[0] == '*') {
        let num2String = display.innerText
        num2String = num2String.slice(1, num2String.length)
        num2 = Number(num2String)
        let resultado = num1 * num2
        if(parseInt(resultado) != parseFloat(resultado)){
            display.innerText = resultado.toFixed(5)
        } else {
            display.innerText = resultado
        }
    }
    if (display.innerText[0] == '/') {
        let num2String = display.innerText
        num2String = num2String.slice(1, num2String.length)
        num2 = Number(num2String)
        let resultado = num1 / num2
        if(parseInt(resultado) != parseFloat(resultado)){
            display.innerText = resultado.toFixed(5)
        } else {
            display.innerText = resultado
        }
    }

}

function press(e){
    if (e.code == 'Numpad0' || e.code == 'Digit0') {
        addNum(0)
    }
    else if (e.code == 'Numpad1' || e.code == 'Digit1') {
        addNum(1)
    }
    else if (e.code == 'Numpad2' || e.code == 'Digit2') {
        addNum(2)
    }
    else if (e.code == 'Numpad3' || e.code == 'Digit3') {
        addNum(3)
    }
    else if (e.code == 'Numpad4' || e.code == 'Digit4') {
        addNum(4)
    }
    else if (e.code == 'Numpad5' || e.code == 'Digit5') {
        addNum(5)
    }
    else if (e.code == 'Numpad6' || e.code == 'Digit6') {
        addNum(6)
    }
    else if (e.code == 'Numpad7' || e.code == 'Digit7') {
        addNum(7)
    }
    else if (e.code == 'Numpad8' || e.code == 'Digit8') {
        addNum(8)
    }
    else if (e.code == 'Numpad9' || e.code == 'Digit9') {
        addNum(9)
    }
    else if (e.code == 'KeyC' || e.code == 'Backspace' ) {
        apagar()
    }
    else if (e.code == 'Equal' || e.code == 'NumpadEnter') {
        result()
    }
    else if (e.code == 'NumpadAdd') {
        op('+')
    }
    else if (e.code == 'NumpadDivide') {
        op('/')
    }
    else if (e.code == 'NumpadMultiply') {
        op('*')
    }
    else if (e.code == 'NumpadSubtract') {
        op('-')
    }
    else if (e.code == 'NumpadDecimal') {
        addNum('.')
    }


}

document.addEventListener("keydown", press )

