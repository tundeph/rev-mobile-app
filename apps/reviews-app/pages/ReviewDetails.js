import React from "react"
import { ContainerView, TitleText, BodyText } from "../styles/globalStyles"

const Home = ({ route }) => {
	const { title, body } = route.params

	return (
		<ContainerView>
			<TitleText> {title}</TitleText>
			<BodyText> {body}</BodyText>
		</ContainerView>
	)
}

export default Home
