//globals

let num1;
let num2;
let operator

// DOM 

const buttonClick = document.querySelectorAll('button')
    
    const digitClick = buttonClick.forEach((button) => {button.addEventListener('click', () =>{
        const display = document.querySelector('.display');
        const displayedNum = display.textContent;
        
        if (display.textContent === '0' && button.className != 'operator' && button.className != 'equals' && button.className != 'clear') {
            display.textContent = button.id
        }
        
        else if (button.className === 'decimal' && !display.textContent.includes('.')) {
            display.textContent = displayedNum + '.'
        }

        else if (button.className === 'number' || button.className === 'zero') {
            display.textContent = displayedNum + button.id;
        }

        else if (button.className === 'operator') {
            num1 = displayedNum.toString();
            display.textContent = '0'
            console.log(num1);

            switch (true) {
                case button.textContent.includes('+'):
                    operator = '+';
                break;

                case button.textContent.includes('-'):
                    operator = '-';
                break;

                case button.textContent.includes('*'):
                    operator = '*';
                break;

                case button.textContent.includes('/'):
                    operator = '/';
                break;

            }

            console.log(operator)
        }

        else if (num1 > 0 && button.className != 'operator' && button.className != 'equals' && button.className != 'clear') {
            display.textContent = button.id;
            num1 = displayedNum.toString();
        }

        else if (button.className === 'clear') {
            display.textContent = '0';
            num1 = '';
            num2 = '';
            operator = '';
        }        

        else if (button.className === 'operator' && operator != null) {
            num2 = displayedNum;
            operate(num1,num2);
            console.log(num1);
        }

        else if (button.className === 'equals') {
            num2 = displayedNum;
            console.log(num1)
            console.log(num2)
            console.log(operator)
            operate(num1, num2)

        }

    }
)});




// operator functions

function add (num1, num2) {
    const display = document.querySelector('.display')
    display.textContent = parseFloat(num1) + parseFloat(num2);
    return parseFloat(num1) + parseFloat(num2);
}

function subtract (num1, num2) {
    const display = document.querySelector('.display')
    display.textContent = parseFloat(num1) - parseFloat(num2);
    return parseFloat(num1) - parseFloat(num2);
}

function multiply (num1, num2) {
    const display = document.querySelector('.display')
    display.textContent = parseFloat(num1) * parseFloat(num2);
    return parseFloat(num1) * parseFloat(num2);
}

function divide (num1, num2) {
    const display = document.querySelector('.display')
    display.textContent = parseFloat(num1) / parseFloat(num2);
    return parseFloat(num1) / parseFloat(num2);
}

function operate (num1, num2){

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

