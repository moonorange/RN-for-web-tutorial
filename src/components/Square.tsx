import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export type SquarePropsType = {
  value: 'X' | '0' | null;
  onPress: () => void;
};

export type Squares = {
	values: Array<SquarePropsType['value']>;
	isXUser: boolean;
  };

export default function Square(props: SquarePropsType) {
  const { value, onPress } = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});
