function countOfAllIndexMatchingNumbers(nums) {
  let count = 0;  //Initialize count
  for(let i = 0; i < nums.length; i++){  //Go through each element in the array
    if(nums[i] == i){  //Checks if current element is equal to its index
      count++;  //Increments count if above statement is true
    }
  }
  return count; //returns number of elements that match the index
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;
