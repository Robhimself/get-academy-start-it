function sum(arr, n) {
  // Only change code below this line
  // Only change code above this line
}

//    Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.

//    min løsning

function sum(arr, n) {
  // Only change code below this line
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
  // Only change code above this line
}

const explaination = `The recursive version of multiply breaks down like this. 
                        In the base case, where n <= 0, it returns 1. 
                        For larger values of n, it calls itself, but with n - 1. 
                        That function call is evaluated in the same way, calling multiply again until n <= 0. 
                        At this point, all the functions can return and the original multiply returns the answer.

                        Note: Recursive functions must have a base case when they return without calling 
                        the function again (in this example, when n <= 0), 
                        otherwise they can never finish executing.`;

const myExplaination = `Vi er ute etter sum, ikke multiplikasjon, derfor sum(arr, n-1) + sum[n-1].
                        Det blir også feil hvis man returner noe annet enn 0 på linje 13.`;
