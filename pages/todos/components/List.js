import React from "react"
import styled from "styled-components/native"
import { View, FlatList, Text, TouchableOpacity } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

const ListContainer = styled(View)`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 16px;
	background-color: #ebebed;
	margin: 5px 0px;
	border-radius: 8px;
	overflow: hidden;
`

const ListItem = styled(Text)`
	margin-left: 12px;
`

const Container = styled(View)`
	flex: 1;
`

const Item = ({ item, onPress }) => {
	return (
		<TouchableOpacity onPress={() => onPress(item)}>
			<ListContainer>
				<MaterialIcons
					name="radio-button-unchecked"
					size={18}
					color="#592be3"
				/>
				<ListItem>{item.text}</ListItem>
			</ListContainer>
		</TouchableOpacity>
	)
}

const List = ({ list, onPress }) => {
	return (
		<Container>
			<FlatList
				data={list}
				renderItem={({ item }) => <Item item={item} onPress={onPress} />}
			/>
		</Container>
	)
}

export default List
