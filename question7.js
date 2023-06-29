function maxCount(m, n, ops) {
    let minX = m; // Initialize the minimum row index to m
    let minY = n; // Initialize the minimum column index to n
  
    for (let i = 0; i < ops.length; i++) {
      const [x, y] = ops[i];
  
      // Update the minimum row and column indices
      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
    }
  
    // The number of maximum integers is the product of minimum row and column indices
    return minX * minY;
  }
  
  // Example usage
  const m = 3;
  const n = 3;
  const ops = [[2, 2], [3, 3]];
  
  const count = maxCount(m, n, ops);
  console.log(count);
  // Output: 4
  