export const Alerts = {
  welcome: `CALCUTRON 9000

This is a calculator that does basic math with two integers.
I ask you for a integer, then an arithmetic operation, then a second integer.

The result may be an integer or a float.

Sound good?`,
  result: (mathsExpression, mathsResult) => `The result of ${mathsExpression} is ${mathsResult}.

Have a nice day. (This window will close.)`,
  resultInvalid: "The result I got was invalid. Oops!",
};

export const Prompts = {
  operandOne: "What's your first integer?",
  operandInvalid: (givenOperand) => `${givenOperand} is not a valid integer. Try again.`,
  operator: `What operation do you wanna do?
+ - * /`,
  operatorInvalid: (givenOperator) => `${givenOperator} is not a valid operator. Choose from the following:
+ - * /`,
  operandTwo: "What's your second integer?",
};
