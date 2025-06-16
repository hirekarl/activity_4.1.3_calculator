import { Prompts } from "./_dialogs.js";

import {
  Operator,
  add,
  subtract,
  multiply,
  divide,
} from "./_maths.js";

import {
  alertWelcome,
  promptForOperand,
  promptForOperator,
  alertResult,
  closeApp,
} from "./_helpers.js";

function runApp() {
  alertWelcome();

  const operandOne = promptForOperand(Prompts.operandOne);
  const operator = promptForOperator();
  const operandTwo = promptForOperand(Prompts.operandTwo);

  let finalResult;

  switch (operator) {
    case Operator.ADD:
      finalResult = add(operandOne, operandTwo);
      break;
    case Operator.SUBTRACT:
      finalResult = subtract(operandOne, operandTwo);
      break;
    case Operator.MULTIPLY:
      finalResult = multiply(operandOne, operandTwo);
      break;
    case Operator.DIVIDE:
      finalResult = divide(operandOne, operandTwo);
      break;
    default:
      finalResult = null;
      break;
  }

  const userExpression = `${operandOne} ${operator} ${operandTwo}`;
  alertResult(userExpression, finalResult);

  closeApp();
}

document.addEventListener("DOMContentLoaded", () => {
  runApp();
});
