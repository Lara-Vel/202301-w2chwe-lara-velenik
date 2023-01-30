export const helloFunction = () => "Hello";

let actualPosition = 0;
let neighborCells = 0;

let grid = [
  [0, 1, 0],
  [0, 1, 0],
  [0, 1, 0],
];

let newGrid = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

function startGame() {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      actualPosition = grid[i][j];

      neighborCells = 0;

      if (grid[i - 1] !== undefined && grid[i - 1][j - 1] === 1) {
        neighborCells++;
      }
      if (grid[i - 1] !== undefined && grid[i - 1][j] === 1) {
        neighborCells++;
      }
      if (grid[i - 1] !== undefined && grid[i - 1][j + 1] === 1) {
        neighborCells++;
      }
      if (grid[i] !== undefined && grid[i][j - 1] === 1) {
        neighborCells++;
      }
      if (grid[i] !== undefined && grid[i][j + 1] === 1) {
        neighborCells++;
      }
      if (grid[i + 1] !== undefined && grid[i + 1][j - 1] === 1) {
        neighborCells++;
      }

      if (grid[i + 1] !== undefined && grid[i + 1][j] === 1) {
        neighborCells++;
      }

      if (grid[i + 1] !== undefined && grid[i + 1][j + 1] === 1) {
        neighborCells++;
      }
      if (actualPosition === 0 && neighborCells === 3) {
        newGrid[i][j] = 1;
      } else if (
        actualPosition === 1 &&
        (neighborCells < 2 || neighborCells > 3)
      ) {
        newGrid[i][j] = 0;
      } else {
        newGrid[i][j] = actualPosition;
      }
    }
  }

  console.table(grid);

  console.table(newGrid);
}

startGame();
