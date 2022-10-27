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
        
        if (display.textContent === '0' && button.className != 'operator' && button.className != 'equals' && button.className != 'clear') {
            display.textContent = button.id;
            console.log('problem1');
        }
        
        else if (button.className === 'decimal' && !display.textContent.includes('.')) {
            display.textContent = displayedNum + '.';
        }

        else if (display.textContent != '0' && button.className === 'number' || button.className === 'zero') {
            display.textContent = displayedNum + button.id;
            console.log('this is the problem2');
        }

        else if(display.textContent != '0' && operator != '' && button.className != 'operator' && button.className != 'equals' && button.className != 'clear') {
            display.textContent = button.id;
            console.log('problem2');
        }

        else if (display.textContent != '0' && solution != '' && button.className === 'number' || button.className === 'zero') {
            display.textContent = displayedNum + button.id;
            console.log('this is the problem2');
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
        console.log(operator)
    }

        else if (button.className === 'clear') {
            display.textContent = '0';
            num1 = '';
            num2 = '';
            operator = '';
            solution = '';
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

        }}
    }
)});




// operator functions

function add (num1, num2) {
    const display = document.querySelector('.display');
    solution = parseFloat(num1) + parseFloat(num2);
    display.textContent = solution;
}

function subtract (num1, num2) {
    const display = document.querySelector('.display');
    solution = parseFloat(num1) - parseFloat(num2);
    display.textContent = solution;
}

function multiply (num1, num2) {
    const display = document.querySelector('.display');
    solution = parseFloat(num1) * parseFloat(num2);
    display.textContent = solution;
}

function divide (num1, num2) {
    const display = document.querySelector('.display');
    solution = parseFloat(num1) / parseFloat(num2);
    display.textContent = solution;
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





//else if (num1 > 0 && button.className != 'operator' && button.className != 'equals' && button.className != 'clear') {
//    display.textContent = button.id;
//    num1 = displayedNum.toString();
//    
//    switch (true) {
//        case button.textContent.includes('+'):
//            operator = '+';
//        break;

//        case button.textContent.includes('-'):
//            operator = '-';
//        break;

//        case button.textContent.includes('*'):
//            operator = '*';
//        break;

//        case button.textContent.includes('/'):
//            operator = '/';
//        break;
        
//}
//console.log(operator)
//}