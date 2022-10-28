//globals

let num1;
let num2;
let operator = '';
let solution;

// DOM 

const buttonClick = document.querySelectorAll('button');
    
    const digitClick = buttonClick.forEach((button) => {button.addEventListener('click', () =>{
        const display = document.querySelector('.display');
        const displayedNum = display.textContent;
        
    if (display.textContent.length < 10){

        if (display.textContent === '0' && button.className != 'operator' && button.className != 'equals' && button.className != 'clear') {
            display.textContent = button.id;
        }
        
        else if (button.className === 'decimal' && !display.textContent.includes('.')) {
            display.textContent = displayedNum + '.';
        }

        else if(display.textContent != '0' && operator != '' && button.className != 'operator' && button.className != 'equals' && button.className != 'clear' && display.textContent.length < 1) {
            display.textContent = button.id;
        }

        else if(display.textContent != '0' && operator != '' && button.className != 'operator' && button.className != 'equals' && button.className != 'clear' && display.textContent === `${solution}`) {
            display.textContent = button.id;
        }

        else if (display.textContent != '0' && solution != '' && button.className === 'number' || button.className === 'zero') {
            display.textContent = displayedNum + button.id;
        }

        else if (display.textContent != '0' && button.className === 'number' || button.className === 'zero') {
            display.textContent = displayedNum + button.id;
        }

        else if (button.className === 'operator' && operator != '') {
            num2 = displayedNum;
            operate(num1, num2);
            operator = '';
            operatorSign()
            num1 = solution;
    }

        else if (button.className === 'operator') {
            num1 = displayedNum.toString();
            display.textContent = '0'
            operator = '';
            operatorSign()
    }   

        else if (button.className === 'clear') {
            display.textContent = '0';
            num1 = '';
            num2 = '';
            operator = '';
            solution = '';
            const failure = document.querySelector('.failDisplay');
            failure.textContent = '';
    }  

        else if (button.className === 'equals') {
            num2 = displayedNum;
            operate(num1, num2);
            num1 = solution;
            operator = '';
        }

        function operatorSign() {
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
        }
    } 
    
    else if (button.className === 'clear') {
        display.textContent = '0';
        num1 = '';
        num2 = '';
        operator = '';
        solution = '';
        const failure = document.querySelector('.failDisplay');
        failure.textContent = '';
    }  
    
    else {
        const failure = document.querySelector('.failDisplay');
        failure.textContent = 'This number exceeds the capacity of the display'
    }
}
)});

// operator functions

function add (num1, num2) {
    const display = document.querySelector('.display');
    solution = parseFloat(num1) + parseFloat(num2);
    display.textContent = Math.round((solution + Number.EPSILON) * 100) / 100;
}

function subtract (num1, num2) {
    const display = document.querySelector('.display');
    solution = parseFloat(num1) - parseFloat(num2);
    display.textContent = Math.round((solution + Number.EPSILON) * 100) / 100;
}

function multiply (num1, num2) {
    const display = document.querySelector('.display');
    solution = parseFloat(num1) * parseFloat(num2);
    display.textContent = Math.round((solution + Number.EPSILON) * 100) / 100;
}

function divide (num1, num2) {
    const display = document.querySelector('.display');
    solution = parseFloat(num1) / parseFloat(num2);
    display.textContent = Math.round((solution + Number.EPSILON) * 100) / 100;
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