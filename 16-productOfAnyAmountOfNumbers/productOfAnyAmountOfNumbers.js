function productOfAnyAmountOfNumbers(...args) {
  let num = 1; //Initialize num to 1, since 0 would lead to product of 0 every time
  for(let i = 0; i < args.length; i++){ //Run through argument list
    num *= args[i]; //Multiply number with current element
  }
  return num; //Returns product of all arguments
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;
