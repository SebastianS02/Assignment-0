class MySolution {
  countDownSum(num) {
    if(num <= 1){ //Base case, checks if num is less than or equal to 1
      return num; //Returns num if above statement is true
    }
    else{ //Num is not less than or equal to 1
      return num + this.countDownSum(num-1); //Recursively return current num plus one before it, hence "-1"
    }
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
