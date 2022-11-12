import React, { useState } from "react"
import styled from "styled-components/native"
import { View, Alert } from "react-native"

import Header from "./components/Header"
import List from "./components/List"
import AddTask from "./components/AddTask"

const Container = styled(View)`
	flex: 1;
	width: 100%;
`

const Body = styled(View)`
	flex: 1;
	padding: 10px 16px;
`

const Todos = () => {
	const [newTask, setNewTask] = useState("")
	const [todos, setTodos] = useState([
		{ text: "Buy Coffee", id: 1 },
		{ text: "Finish GraphQL course", id: 2 },
		{ text: "Visit grandparents", id: 3 },
		{ text: "Create landing page", id: 4 },
		{ text: "Watch football match", id: 5 },
	])

	const handleChangeText = (value) => {
		setNewTask(value)
	}

	const handleRemoveTask = (item) => {
		setTodos((prevTodos) =>
			prevTodos.filter((todo) => todo.id != item.id && todo.text != item.text)
		)
	}

	const handleAddTask = (value) => {
		if (value.length > 3) {
			setTodos((prevTodos) => {
				const id = Math.random()
				return [{ text: value, id }, ...prevTodos]
			})
			setNewTask("")
		} else {
			Alert.alert(
				"NOT LONG ENOUGH",
				"You need to enter more than 3 characters to create task",
				[{ text: "Close" }]
			)
		}
	}

	return (
		<Container>
			<Header />
			<Body>
				<AddTask
					value={newTask}
					onChangeText={handleChangeText}
					onPress={handleAddTask}
				/>
				<List list={todos} onPress={handleRemoveTask} />
			</Body>
		</Container>
	)
}

export default Todos
