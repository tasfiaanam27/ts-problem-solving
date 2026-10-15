function diagonalSums(matrix: number[][]): { main: number; secondary: number } {
    let main = 0;
    let secondary = 0;

    const n = matrix.length;

    for (let i = 0; i < n; i++) {
        main += matrix[i][i];
        secondary += matrix[i][n - 1 - i];
    }

    return { main, secondary };
}