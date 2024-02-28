function Calculator() {
    this.history = [];
}

Calculator.prototype.add = function (num1, num2) {
    const result = num1 + num2;
    this.history.push(`added ${num1} to ${num2} got ${result}`);
    return result;
};

Calculator.prototype.multiply = function (num1, num2) {
    const result = num1 * num2;
    this.history.push(`multiplied ${num1} with ${num2} got ${result}`);
    return result;
};

Calculator.prototype.subtract = function (num1, num2) {
    const result = num1 - num2;
    this.history.push(`subtracted ${num1} from ${num2} got ${result}`);
    return result;
};

Calculator.prototype.divide = function (num1, num2) {
    const result = num1 / num2;
    this.history.push(`divided ${num1} by ${num2} got ${result}`);
    return result;
};

Calculator.prototype.printOperations = function () {
    console.log("History: ");
    this.history.forEach(function(history) {
        console.log(history);
    });
};

Calculator.prototype.clearOperations = function () {
    console.log("History cleared!");
    this.history = [];
};

const calculator = new Calculator();
console.log(calculator.add(5, 2)); // 7
console.log(calculator.multiply(3, 4)); // 12
console.log(calculator.subtract(10, 6)); // 4
console.log(calculator.divide(15, 3)); // 5

calculator.printOperations();
calculator.clearOperations();
calculator.printOperations(); // should print nothing