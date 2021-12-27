function sumOfNumsWithinARange(nums, start, end) {
  let count = 0; //initialize count
  for(let i = 0; i < nums.length; i++){ //run through array
    if(nums[i] >= start && nums[i] <= end){ //checks if element is in range
      count++; //increment count if above statement is true
    }
  }
  return count; //returns number of elements in range
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;
