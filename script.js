let num1;
let num2;
let solution;
const buttonClick = document.querySelectorAll('button')
    
    const digitClick = buttonClick.forEach((button) => {button.addEventListener('click', () =>{
        const display = document.querySelector('.display');
        const displayedNum = display.textContent;
        
        if (display.textContent === '0' && button.className != 'operator' && button.className != 'equals') {
            display.textContent = button.id
        }
        
        else if (button.className === 'decimal' && !display.textContent.includes('.')) {
            display.textContent = displayedNum + '.'
        }

        else if (button.className === 'clear') {
            display.textContent = '0'
        }
        
        else if (button.className === 'number') {
            display.textContent = displayedNum + button.id;
        }

        else if (button.className === 'operator') {
            num1 = displayedNum.toString();
            console.log(num1);
            display.textContent = ''
        }

        else if (button.className === 'equals') {
            parseFloat(num1)
            parseFloat(num2)
            console.log(num1)
            console.log(num2)
        }

    }
)});






function add (num1, num2) {
    return num1 + num2
}

function subtract (num1, num2) {
    return num1 - num2
}

function multiply (num1, num2) {
    return num1 * num2
}

function divide (num1, num2) {
    return num1 / num2
}

function operate (){

    if (operator === '+') {
        add(num1, num2)
    }

    else if (operator === '-') {
        subtract(num1, num2)
    }

    else if (operator === '*') {
        multiply(num1, num2)
    }

    else if (operator === '/') {
        divide(num1, num2)
    }
    else {
        return ''
    }
}

