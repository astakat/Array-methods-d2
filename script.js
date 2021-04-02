const superheroes = [
  { name: "Batman", alter_ego: "Bruce Wayne" },
  { name: "Superman", alter_ego: "Clark Kent" },
  { name: "Spiderman", alter_ego: "Peter Parker" },
];

const findSpiderMan = (superheroes) =>
  superheroes.find((element) => element.name == "Spiderman");

console.log(findSpiderMan(superheroes));
// Find Spiderman
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

const doubleArrayValues = function (integers) {
  return integers.map((i) => i * 2);
};
console.log(doubleArrayValues([1, 2, 3]));
// result should be [2, 4, 6]

const containsNumberBiggerThan10 = (array) => {
  let result = false;
  array.forEach((number) => {
    if (number > 10) result = true;
  });
  return result;
};

const alsocontainsNumberBiggerThan10 = (array) => {
  return array.reduce((accumulator, currentValue) => {
    return accumulator || currentValue > 10 || false;
  }, false);

let accumulator = false
array.forEach(currentValue => {
  if (accumulator === true) { accumulator = true }
  if (currentValue > 10) { accumulator = true }
  accumulator = false
});
return accumulator
};

console.log(alsocontainsNumberBiggerThan10([1, 4, 3, 6, 9, 11, 7, 0]));
// result should be true
console.log(containsNumberBiggerThan10([1, 2, 1, 2, 1, 2]));
// result should be false

const isItalyInTheGreat7 = (array) => {
  const result = array.includes("Italy");
  console.log(result);
};

isItalyInTheGreat7([
  "Canada",
  "France",
  "Germany",
  "Italy",
  "Japan",
  "United Kingdom",
  "United States",
]);
// result should be true

const tenfold = (array) => {
  let result = [];
  array.forEach((number) => {
    result.push(number * 10);
    // console.log(arrayResult);
    // const result = (tenfold)(Number(number * 10));
    // return result;
  });
  return result;
};

const tenfold2 = (array) => array.map((currentValue) => currentValue * 10);

console.log(tenfold([1, 4, 3, 6, 9, 7, 11]));
// result should be [10, 40, 30, 60, 90, 70, 110]

const isBelow100 = (array) => {
  let resultBelow100 = false;
  array.forEach((number) => {
    if (number < 100) result = true;
  });
  return resultBelow100;
};

console.log(
  isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98])
);
// result should be: false


const numbers = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];

const bigSum = (numbers => {
  const bigSumTotal = numbers.reduce((total, amount, index, array) => {
    total += amount;
    if( index === array.length-1) { 
      return total;
    }
    else return total;
  });
  return bigSumTotal;
});

console.log(
  bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234])
);
// result should be 1118
