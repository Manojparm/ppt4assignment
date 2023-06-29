function transposeMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
  
    // Create a new matrix with flipped dimensions
    const transposedMatrix = Array.from(Array(cols), () => Array(rows));
  
    // Fill the transposed matrix with values from the original matrix
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        transposedMatrix[j][i] = matrix[i][j];
      }
    }
  
    return transposedMatrix;
  }
  
  // Example usage
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  const transposed = transposeMatrix(matrix);
  console.log(transposed);
  // Output: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
  