import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "./pages/Home"
import ReviewDetails from "./pages/ReviewDetails"
import { ContainerView, TitleText } from "./styles/globalStyles"

const Stack = createNativeStackNavigator()

const options = {
	headerStyle: {
		backgroundColor: "#592be3",
	},
	headerTintColor: "#fff",
	headerTitleStyle: {
		fontWeight: "bold",
	},
}

const HeaderTile = () => {
	return <TitleText> Hey!</TitleText>
}

const ReviewsApp = () => {
	return (
		<NavigationContainer>
			{/* <Stack.Navigator screenOptions={options}> */}
			<Stack.Navigator>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen
					name="Review Details"
					component={ReviewDetails}
					options={{ headerTile: (props) => <HeaderTile {...props} /> }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default ReviewsApp
