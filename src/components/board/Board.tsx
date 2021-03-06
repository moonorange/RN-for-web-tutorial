import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Square, { SquarePropsType, Squares } from '../Square';
import calculateWinner from './calculateWinner';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 10,
  },
  status: {
    marginBottom: 10,
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  resetButton: {
    marginVertical: 10,
    width: 150,
  },
});

export default function Board() {
  const initialSquares: Squares = {
    values: Array(9).fill(null),
    isXUser: true,
  };
  const [squares, setSquares] = React.useState(initialSquares);
  const winner = calculateWinner(squares);
  let status: string;
  winner
    ? (status = `Winner: ${winner}`)
    : (status = 'Next player: ' + (squares.isXUser ? 'X' : '0'));

  const handlePress = (idx: number) => {
    const array_values = squares.values.slice(); // Copy squares
    if (winner) return;

    if (array_values[idx] !== null) {
      array_values[idx] = null;
    } else {
      array_values[idx] = squares.isXUser ? 'X' : '0';
    }
    setSquares({
      values: array_values,
      isXUser: !squares.isXUser,
    });
  };

  const renderSquare = (idx: number) => {
    return (
      <Square value={squares.values[idx]} onPress={() => handlePress(idx)} />
    );
  };

  const resetSquares = React.useCallback(
    () => setSquares(initialSquares),
    [setSquares, initialSquares]
  );

  return (
    <View style={styles.container}>
      <Text style={styles.status}>{status}</Text>
      <View style={styles.rowContainer}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </View>
      <View style={styles.rowContainer}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </View>
      <View style={styles.rowContainer}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </View>
      <View style={styles.resetButton}>
        <Button title="Reset" onPress={resetSquares}></Button>
      </View>
    </View>
  );
}
