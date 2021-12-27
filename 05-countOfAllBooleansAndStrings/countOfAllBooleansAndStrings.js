function countOfAllBooleansAndStrings(arr) {
  let count = 0; //initialize count
  for(let i = 0; i < arr.length; i++){ //go through array of variables
    if(typeof arr[i] == "boolean" || typeof arr[i] == "string"){ //checks if the current element is of type boolean or string
      count++; //Increment count if variable is a boolean or a string
    }
  }
  return count; //return number of booleans and strings in arr
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;
