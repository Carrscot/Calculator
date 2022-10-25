//globals

let num1;
let num2;
let solution = '';
let operator

// DOM 

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
        
        else if (button.className === 'number' ||button.className === 'zero') {
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

        else if (button.className === 'equals') {
            num2 = displayedNum.toString();
            console.log(num1)
            console.log(num2)
            console.log(solution)
            
            if (solution === '') {
                operate(num1, num2)
            }

            else if (solution > 0) {
                operate(solution, num2)
            }
        }

    }
)});




// operator functions

function add (num1, num2) {
    solution = num1 + num2
}

function subtract (num1, num2) {
    solution = num1 - num2
}

function multiply (num1, num2) {
    solution = num1 * num2
}

function divide (num1, num2) {
    solution = num1 / num2
}

function operate (){

    if (operator === '+') {
        add(num1, num2)
        display.textContent = solution
    }

    else if (operator === '-') {
        subtract(num1, num2)
        display.textContent = solution
    }

    else if (operator === '*') {
        multiply(num1, num2)
        display.textContent = solution
    }

    else if (operator === '/') {
        divide(num1, num2)
        display.textContent = solution
    }
    else {
        return ''
    }
}

