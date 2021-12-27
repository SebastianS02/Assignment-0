function countOfAllBooleans(arr) {
  let count = 0; //initialize count
  for(let i = 0; i < arr.length; i++){ //go through array of variables
    if(typeof arr[i] == "boolean"){ //checks if the current element is of type boolean
      count++; //Increment count if variable is a boolean
    }
  }
  return count; //return number of booleans in arr
}

// Do not edit this line;
module.exports = countOfAllBooleans;
