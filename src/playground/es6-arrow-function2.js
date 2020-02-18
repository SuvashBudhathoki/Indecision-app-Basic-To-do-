// arguments object - no longer bound with arrow functions

const add = (x, y) => x + y;
console.log(add(5, 2));

// this keyword - no longer bound with arrow functions

const user = {
  name: "Suvash",
  cities: ["Ktm", "Bne", "Syd"],

  printPlacesLived() {
    return this.cities.map(city => this.name + " has lived in " + city);
  }
};

console.log(user.printPlacesLived());

//challenge area

const multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 2,

  multiply() {
    return this.numbers.map(number => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());
