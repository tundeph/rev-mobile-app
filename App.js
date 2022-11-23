import React from "react"

import { useFonts } from "expo-font"
import TodosApp from "./apps/todos-app/TodosApp"
import ReviewsApp from "./apps/reviews-app/ReviewsApp"

const App = () => {
	const [fontsLoaded] = useFonts({
		Beatrice: require("./assets/fonts/Beatrice.ttf"),
		"Beatrice Bold": require("./assets/fonts/Beatrice_Bold.ttf"),
		"Beatrice Bold Italic": require("./assets/fonts/Beatrice_Bold_Italic.ttf"),
	})

	if (!fontsLoaded) return null

	// return <TodosApp />
	return <ReviewsApp />
}

export default App
