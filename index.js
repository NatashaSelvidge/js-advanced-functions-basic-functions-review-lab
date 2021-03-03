// Your code here
function saturdayFun(string = "roller-skate") {
  return `This Saturday, I want to ${string}!`;
}
saturdayFun();
saturdayFun("bathe my dog");

function mondayWork(string = "go to the office") {
  return `This Monday, I will ${string}.`;
};

mondayWork();
mondayWork("I will work from home");

function wrapAdjective(symbol="*"){
return function(adjective="special"){
  return `You are ${symbol}${adjective}${symbol}!`;
  }
}

const Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b
}

function actionApplyer(start, array){
  for (let i = 0; i<  array.length; i++){
    start = array[i](start);
  }
  return start;
}