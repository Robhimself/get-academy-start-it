function spreadOut() {
  let fragment = ["to", "code"];
  let sentence; // Change this line
  return sentence;
}

console.log(spreadOut());

//   We have defined a function spreadOut that returns the variable sentence. Modify the function using the spread operator so that it returns the array ['learning', 'to', 'code', 'is', 'fun'].

// min løsning

function spreadOut() {
  let fragment = ["to", "code"];
  let sentence = ["learning", ...fragment, "is", "fun"]; // Change this line
  return sentence;
}

console.log(spreadOut());
