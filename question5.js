function arrangeCoins(n) {
    let row = 1; // Start with the first row
    while (n >= row) {
      n -= row; // Subtract the coins used in the current row
      row++; // Move to the next row
    }
    return row - 1; // Return the number of complete rows
  }
  
  // Example usage
  const n = 5;
  const completeRows = arrangeCoins(n);
  console.log(completeRows);
  // Output: 2
  