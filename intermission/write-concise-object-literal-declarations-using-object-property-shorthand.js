const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {
    name: name,
    age: age,
    gender: gender,
  };
  // Only change code above this line
};

//   Use object property shorthand with object literals to create and return an object with name, age and gender properties.

//  min løsning

const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {
    name,
    age,
    gender,
  };
  // Only change code above this line
};

// eller const createPerson = (name, age, gender) => ({ name, age, gender });
