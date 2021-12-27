function fizzBuzz(start, end){
  let size = end - start + 1; //Initializes size of the array
  let count = 0; //Used to track elements in the array
  let arr = new Array(size); //Initialize array that will be returned
  for(let i = start; i <= end; i++, count++){ //run through start to end
    if(i % 15 == 0 && i != 0){ //Check if divisible by both 3 and 5 first
      arr[count] = "FizzBuzz"; //Change to Fizzbuzz if above statement is true
    }
    else if(i % 5 == 0 && i != 0){ //If above statement not true, check if divisible by 5
      arr[count] = "Buzz"; //Change to Buzz if above statement is true
    }
    else if(i % 3 == 0 && i != 0){ //Check if divisble by 3 if both statements above are false
      arr[count] = "Fizz"; //Change to Fizz if above statement is true
    }
    else{ //All other statements have failed
      arr[count] = i; //Element will simply be the number in the range
    }
  }
  return arr; //Return finished array
}

// Do not edit this line;
module.exports = fizzBuzz;
