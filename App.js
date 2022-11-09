import React from "react"
import {
	StyleSheet,
	View,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native"
import Todos from "./pages/todos/Todos"

const App = () => {
	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.container}>
				<Todos />
			</View>
		</TouchableWithoutFeedback>
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
