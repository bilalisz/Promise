const makeNumArray = (number) => {
  return [...Array(number).keys()];
};

const getSum = (array = [1, 2, 3, 4]) => {
  let sum = 0;
  for (let value of array) {
    sum = sum + value;
  }
  return sum;
};

const FindNumber = (number) => {
  let numberLimit = makeNumArray(number);
  let numbers = [];
  for (let value of numberLimit) {
    if (value % 3 === 0 || value % 5 === 0) {
      numbers.push(value);
    }
  }
  return {
    allNumber: numbers,
    sum: getSum(numbers),
  };
};

console.log(FindNumber(1000));
