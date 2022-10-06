// Only change code below this line
const bicycle = {
  gear: 2,
  setGear: function (newGear) {
    this.gear = newGear;
  },
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);

//   Refactor the function setGear inside the object bicycle to use the shorthand syntax described above.

//  min løsning

// Only change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  },
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
