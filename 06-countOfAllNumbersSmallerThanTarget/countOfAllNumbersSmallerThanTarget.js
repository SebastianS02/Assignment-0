function countOfAllNumbersSmallerThanTarget(nums, target) {
  let count = 0; //Initialize count
  for(let i = 0; i < nums.length; i++){  //Go through array of nums
    if(nums[i] < target){  //Check if current element is smaller than target
      count++; //Increment count if above statement is true
    }
  }
  return count;  //returns number of values smaller than target
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;
