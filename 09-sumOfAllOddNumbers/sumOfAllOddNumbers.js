function sumOfAllOddNumbers(nums) {
  let count = 0; //Initialize count 
  for(let i = 0; i < nums.length; i++){  //runs through array
    if(nums[i] % 2 == 1){  //checks if element is odd
      count++; //Increment count if above statement is true
    }
  }
  return count; //Returns number of odd numbers in array
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;
