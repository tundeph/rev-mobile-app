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
		height: 1000,
	},
	headerTintColor: "#fff",
	headerTitleStyle: {
		fontWeight: "bold",
	},
}

const HeaderTile = (props) => {
	return (
		<TitleText>
			{props.route ? props.route.params.title : props.children}
		</TitleText>
	)
}

const ReviewsApp = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ ...options }}>
				<Stack.Screen
					name="Home"
					component={Home}
					options={{
						headerTitle: (props) => <HeaderTile {...props} />,
					}}
				/>
				<Stack.Screen
					name="Review Details"
					component={ReviewDetails}
					options={({ route }) => ({
						headerTitle: (props) => <HeaderTile route={route} {...props} />,
					})}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default ReviewsApp
