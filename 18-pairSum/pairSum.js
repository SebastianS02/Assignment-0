function pairSum(nums, target) {
  if(nums.length <= 1){ //Checks if array has less than or 1 element
    throw 'error'; //Throws error if above statement is true
  }
  else{ //runs code otherwise
  for(let i = 0; i < nums.length; i++){  //Runs through array for first number
    for(let j = 0; j < nums.length; j++){ //Runs through array for second number
      if(nums[i] + nums[j] == target){ //Checks if two values add up to target
        return true; //Returns true if above statement is true, ends code
      }
    }
  }
  }
  return false; //All variations were checked and no sum was found, returns false
}

// Do not edit this line;
module.exports = pairSum;
