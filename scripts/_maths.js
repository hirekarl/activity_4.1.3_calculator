export const Operator = {
  ADD: "+",
  SUBTRACT: "-",
  MULTIPLY: "*",
  DIVIDE: "/",
};

export const isValidOperator = (operator) => {
  return Object.values(Operator).includes(operator);
};

export const add = (integerOne, integerTwo) => {
  return integerOne + integerTwo;
};

export const subtract = (integerOne, integerTwo) => {
  return integerOne - integerTwo;
};

export const multiply = (integerOne, integerTwo) => {
  return integerOne * integerTwo;
};

export const divide = (integerOne, integerTwo) => {
  return integerOne / integerTwo;
};
