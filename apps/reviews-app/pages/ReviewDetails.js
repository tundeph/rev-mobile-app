import React from "react"
import { ContainerView, TitleText, BodyText } from "../styles/globalStyles"

const ReviewDetails = ({ route }) => {
	const { title, body } = route.params

	return (
		<ContainerView>
			<BodyText> {body}</BodyText>
		</ContainerView>
	)
}

export default ReviewDetails
