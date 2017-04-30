
function largestOfFour(arr) {
  // You can do this!
  var maxNums = []; 
  for (var i in arr){
    
      maxNums.push(Math.max.apply( Math , arr[i]));
    }
  return maxNums;
  }
  


largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
