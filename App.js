import React from "react"
import { StyleSheet, View, Text } from "react-native"
import Todos from "./pages/todos/Todos"

const App = () => {
	return (
		<View style={styles.container}>
			<Todos />
		</View>
	)
}

export default App

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		// justifyContent: "center",
	},
})
