# Calculator

For this Odin Project assignment I will be Creating A functioning calculator with a visual interface.
This will be done in several stages begining with pseudocoding then programming relevant functions, creating the user interface and finally connecting the UI with the relevant functions.



1) Functions
  a) Create basic mathematical functions - add, subtract, multiply, divide
  b) create operate function which takes an operator and 2 numbers and calls the previous functions


2) UI
  a) on click >>> return button.id and display >>> hold that return in a variable >>> concant with next click


3) Linking
  a) Figure out how to store the number as a variable after an operator has been clicked >>> try using an array or object method?? xxx
											 >>> Object [ num1: X , num2: y] then use this.num1 'operator' this.num2??? xxx
											 >>> store using toString <<<<
  
b) Logic >>> When an operator or the equals button is clicked the number is stored as num1.
	 >>> Number in dispaly.textContent after an operator or equals is clicked is num2.
	 >>> operate(num1, num2) should yeild the stored number (operator) number currently on display
	 >>> When either the operator or equals is clicked the display should yeild the result of operate(num1,num2)
	 >>> Ensure that operations continue when clicking operators > currently not storing number properly.
	 >>> if operator has been clicked and current display is not '0' display.textConent = button.id
	 >>> when operator is clicked a second time it changes from num1, num2 = solution >>> num1=solution, num2 =displayedNum

		Figure out dispaly problem



