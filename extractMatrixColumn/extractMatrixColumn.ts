function extractMatrixColumn(matrix: number[][], column: number): number[] {
    const matrixColumn: number[] = [];
    matrix.forEach((row) => matrixColumn.push(row[column]));
    return matrixColumn;
}

console.log(extractMatrixColumn([[1, 2, 3, 4], [5, 6, 7, 8], [9, 1, 2, 3]], 1)); // DEVUELVE [ 2, 6, 1 ]
console.log(extractMatrixColumn([[1, 2, 3, 4], [5, 6, 7, 8], [9, 1, 2, 3]], 2)); // DEVUELVE [ 3, 7, 2 ]
console.log(extractMatrixColumn([[1, 2, 3, 4], [5, 6, 7, 8], [9, 1, 2, 3]], 3)); // DEVUELVE [ 4, 8, 3 ]
console.log(extractMatrixColumn([[1, 2, 3, 4], [5, 6, 7, 8], [9, 1, 2, 3]], 0)); // DEVUELVE [ 1, 5, 9 ]
