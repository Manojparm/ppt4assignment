function sortedSquares(nums) {
    const squared = [];
  
    for (let num of nums) {
      squared.push(num * num);
    }
  
    squared.sort((a, b) => a - b);
  
    return squared;
  }
  
  // Example usage
  const nums = [-4, -1, 0, 3, 10];
  const squaredArray = sortedSquares(nums);
  console.log(squaredArray); // Output: [0, 1, 9, 16, 100]
  