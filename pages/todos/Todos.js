import React, { useState } from "react"
import styled from "styled-components/native"
import { View } from "react-native"

import Header from "./components/Header"
import List from "./components/List"

const Container = styled(View)`
	width: 100%;
`

const Body = styled(View)`
	padding: 10px 16px;
`

const Todos = () => {
	const [todos, setTodos] = useState([
		{ text: "Buy Coffee", id: 1 },
		{ text: "Finish GraphQL course", id: 2 },
		{ text: "Visit grandparents", id: 3 },
		{ text: "Create landing page", id: 4 },
		{ text: "Watch football match", id: 5 },
	])

	const handlePress = (id) => {
		setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id))
	}

	return (
		<Container>
			<Header />
			<Body>
				<List list={todos} onPress={handlePress} />
			</Body>
		</Container>
	)
}

export default Todos
