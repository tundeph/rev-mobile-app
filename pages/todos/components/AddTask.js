import React, { useState } from "react"
import styled from "styled-components/native"

import { View, TextInput, Button } from "react-native"

const Container = styled(View)`
	display: flex;
	margin: 10px 0px 30px;
`

const Input = styled(TextInput)`
	border: 1px solid #592be3;
	border-radius: 8px;
	height: 48px;
	padding: 10px;
	margin: 10px 0px;
`

const AddButton = styled(Button)`
	padding: 16px;
	height: 48px;
`

const AddTask = ({ value, onChangeText, onPress }) => {
	return (
		<Container>
			<Input
				placeholder="Enter new task"
				value={value}
				onChangeText={onChangeText}
			/>
			<AddButton title="Add task" onPress={() => onPress(value)} />
		</Container>
	)
}

export default AddTask
