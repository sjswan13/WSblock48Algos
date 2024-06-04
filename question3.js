function heightChecker(heights) {
  let sortedHeights = [...heights].sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < heights.length; i++) {
    if(heights[i] !== sortedHeights[i]) {
      count++;
    }
  } 
  return count;
}

//example
const heights = [1, 1, 4, 2, 1, 3];
console.log(heightChecker(heights));