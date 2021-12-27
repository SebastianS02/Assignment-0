function sumOfMinimumAndMaximum(nums) {
  let min = nums[0];
  let max = nums[0];
  let sum = 0; //Initialzing values
  for(let i = 0; i < nums.length; i++){ //run through array
    if(min > nums[i]){ //Checks if current element is less than minimum value
      min = nums[i]; //Sets new minimum value if above statement is true
    }
    if(max < nums[i]){ //Checks if current element is greater than maximum value
      max = nums[i]; //Sets new maximum value if above statement is true;
    }
  }
  sum = min + max; //Adds the minimum and maximum values
  return sum; //Returns above value
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;
