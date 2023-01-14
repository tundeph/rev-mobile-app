import React, { useState } from "react"
import { Button, FlatList, TouchableOpacity } from "react-native"
import { ContainerView, TitleText, BodyText } from "../styles/globalStyles"

const Home = ({ navigation }) => {
	const [reviews, setReviews] = useState([
		{ title: "Sniper Revolution", rating: 3, body: "Lorem ipsum", key: "1" },
		{ title: "Game of Thrones", rating: 5, body: "Lorem ipsum", key: "2" },
		{ title: "Last Kingdom", rating: 4, body: "Lorem ipsum", key: "3" },
	])

	return (
		<ContainerView>
			<FlatList
				data={reviews}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() => navigation.navigate("Review Details", item)}
					>
						<BodyText> {item.title} </BodyText>
					</TouchableOpacity>
				)}
			/>
		</ContainerView>
	)
}

export default Home
