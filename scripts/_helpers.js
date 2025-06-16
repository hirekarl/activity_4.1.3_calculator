import { Alerts, Prompts } from "./_dialogs.js";
import { isValidOperator } from "./_maths.js";

export const alertWelcome = () => {
  alert(Alerts.welcome);
};

export const promptForOperand = (operandPrompt) => {
  let operand = Number(prompt(operandPrompt));
  while (!Number.isInteger(operand)) {
    operand = Number(prompt(Prompts.operandInvalid(operand)));
  }
  return operand;
};

export const promptForOperator = () => {
  let operator = prompt(Prompts.operator);
  while (!isValidOperator(operator)) {
    operator = prompt(Prompts.operatorInvalid(operator));
  }
  return operator;
};

export const alertResult = (userExpression, finalResult) => {
  if (finalResult !== null) {
    alert(Alerts.result(userExpression, finalResult));
  } else {
    alert(Alerts.resultInvalid);
  }
};

export const closeApp = () => {
  window.close();
};
