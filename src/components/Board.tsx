import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Square from './Square'

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
	}
})

export default function Board() {
	const status = 'Next player: X'

	const renderSquare = (value: number) => {
		return <Square />
	}

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
		</View>
	)
}
