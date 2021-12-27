class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    let mid = (Math.floor(nums.length/2)); //Set mid value for binary search
    let arr = nums.slice(0); //Copies array so original is not mutated
    if(nums[mid] == target){ //If key is found, return true
      return true;
    }
    if(nums[mid] < target){ //If mid is less than target, check upper half of array
      return this.binarySearch(arr.splice(mid, arr.length - 1), target);
    }
    if(nums[mid] > target){ //If mid is greater than target, check lower half of array
      return this.binarySearch(arr.splice(0, mid), target);
    }
    return false; //target was never found
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
