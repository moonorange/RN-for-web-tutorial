import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SquarePropsType } from './Square';

const styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
  },
});

export type SquaresType = {
  values: Array<SquarePropsType['value']>;
  isXUser: boolean;
};

export default function RenderSquares({ squareNum }: number) {
  const squares = [];
  for (let idx = 0; idx < squareNum; idx++) {
    squares.push(<View style={styles.rowContainer}>{renderSquare(idx)}</View>);
  }
  return { squares };
}
