const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

class Calculator {
    constructor(previousOperationText, currentOperationText) {
        this.previousOperationText = previousOperationText;
        this.currentOperationText = currentOperationText;
        this.currentOperation = "";
        this.divisionByZeroError = false;
    }
    
    // add digit to calculator screen
    addDigit(digit) {
        // Start a fresh calculation when a digit is entered after an error.
        if (this.divisionByZeroError) {
            this.processClearOperation();
        }

        //check if current operation already has a dot
        if (digit === "." && this.currentOperationText.innerText.includes(".")) {
            return;
        }

        this.currentOperation = digit;
        this.updateScreen();
    }

    // Process all calculator operations 
    processOperation(operation) {
        if (this.divisionByZeroError) {
            if (["C", "CE", "DEL"].includes(operation)) {
                this.processClearOperation();
            }
            return;
        }

        // Check if current is empty
        if (this.currentOperationText.innerText === "" && operation !== "C") {
            // Change operation
            if (this.previousOperationText.innerText !== "") {
                this.changeOperation(operation);
            }
            return;
        }

        // Get current and previous value
        let operationValue;
        const previous = +this.previousOperationText.innerText.split(" ")[0];
        const current = +this.currentOperationText.innerText;   

        switch(operation) {
            case "+":
                operationValue = previous + current
                this.updateScreen(operationValue, operation, current, previous);
                break;
                case "-":
                operationValue = previous - current
                this.updateScreen(operationValue, operation, current, previous);
                break;
                case "/":
                if (this.previousOperationText.innerText !== "" && current === 0) {
                    this.previousOperationText.innerText = "";
                    this.currentOperationText.innerText = "Erro: divisão por zero";
                    this.currentOperationText.classList.add("is-error");
                    this.divisionByZeroError = true;
                    return;
                }
                operationValue = previous / current
                this.updateScreen(operationValue, operation, current, previous);
                break;
                case "*":
                operationValue = previous * current
                this.updateScreen(operationValue, operation, current, previous);
                break;
                case "DEL":
                this.processDelOperator();
                break;
                case "CE":
                    this.processClearCurrentOperation();
                break;
                case "C":
                    this.processClearOperation();
                break;
                case "=":
                    this.processEqualOperator();
                break;
            default:
                return;  
        } 
    }

    // Change valeus of the calculator screen
    updateScreen(
        operationValue = null,
         operation = null,
          current = null,
           previous = null
           ) {

        if(operationValue === null) {
            this.currentOperationText.innerText += this.currentOperation;
        } else {
            // The first operand is entered before a previous operation exists.
            // Do not treat a previous value of 0 as an empty operation.
            if (this.previousOperationText.innerText === "") {
                operationValue = current;
            }

            // Add current value to previous
            this.previousOperationText.innerText = `${operationValue} ${operation}`;
            this.currentOperationText.innerText = "";
        }
    }

    // Change match operation
    changeOperation(operation) {

        const matchOperations = ["*", "/", "+", "-"];

        if (!matchOperations.includes(operation)) {
            return
        }

        this.previousOperationText.innerText = this.previousOperationText.innerText.slice(0, -1) + operation;
    }
    
    // Delete the last digit
    processDelOperator() {
        this.currentOperationText.innerText = this.currentOperationText.innerText.slice(0, -1);
    }
    // Clear current operation
    processClearCurrentOperation() {
        this.currentOperationText.innerText = "";
    }
    // Clear all operations
    processClearOperation() {
        this.currentOperationText.innerText = "";
        this.previousOperationText.innerText = "";
        this.divisionByZeroError = false;
        this.currentOperationText.classList.remove("is-error");
    }

    // Process an operatio
    processEqualOperator() {
        const operation = previousOperationText.innerText.split(" ")[1];
        this.processOperation(operation);
    }
}

const calc = new Calculator(previousOperationText, currentOperationText);

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;
        
        if(+value >= 0 || value === ".") {
            calc.addDigit(value);
        } else {
            calc.processOperation(value);
        }
   });
});