// const square = function(x) {
//   return x * x;
// };

// const squareArrow = x => x * x;

// console.log(square(8));
// console.log(squareArrow(8));

//Challenge - use arrow functions
//getFirstName ('Mike Smith') -> 'Mike'

function GetFirstName(name) {
  return name.split(" ")[0];
}

const getFirstName = fullName => fullName.split(" ")[0];
console.log(getFirstName("Mike Smith"));
