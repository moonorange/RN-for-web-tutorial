import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Square() {
	return (
	  <TouchableOpacity style={styles.container}>
		<Text style={styles.text}>x</Text>
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
	  alignItems: 'center'
	},
	text: {
	  fontSize: 24,
	}
  });
