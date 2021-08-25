import { Squares } from '../Square';

export default function calculateWinner(squares: Squares) {
  // all possible ways to win
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [one, two, three] = lines[i];
    if (
      squares.values[one] &&
      squares.values[one] === squares.values[two] &&
      squares.values[one] === squares.values[three]
    ) {
      return squares.values[one];
    }
  }
  return null;
}
