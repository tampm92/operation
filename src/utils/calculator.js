const Operation = function () {
  this.operation = null;
};

Operation.prototype = {
  setOperation: function (operation) {
    this.operation = operation;
  },

  calculate: function (number1, number2) {
    return this.operation.calculate(number1, number2);
  },
};

const AddOperation = function () {
  this.calculate = function (number1, number2) {
    return number1 + number2;
  };
};

const SubtractOperation = function () {
  this.calculate = function (number1, number2) {
    return number1 - number2;
  };
};

const MultiplyOperation = function () {
  this.calculate = function (number1, number2) {
    return number1 * number2;
  };
};

const DivideOperation = function () {
  this.calculate = function (number1, number2) {
    return number1 / number2;
  };
};

export const getOperation = (operator) => {
  const operations = {
    '+': new AddOperation(),
    '-': new SubtractOperation(),
    '*': new MultiplyOperation(),
    '/': new DivideOperation(),
  };

  const operation = new Operation();

  operation.setOperation(operations[operator]);

  return operation;
};
