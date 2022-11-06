import React from "react"
import styled from "styled-components/native"
import { View, FlatList, Text, TouchableOpacity } from "react-native"

const ListItem = styled(Text)`
	padding: 16px;
	background-color: #ebebed;
	margin: 5px 0px;
	border-radius: 5px;
`

const Item = ({ item, onPress }) => {
	return (
		<TouchableOpacity onPress={() => onPress(item.id)}>
			<ListItem>{item.text} </ListItem>
		</TouchableOpacity>
	)
}

const List = ({ list, onPress }) => {
	return (
		<FlatList
			data={list}
			renderItem={({ item }) => <Item item={item} onPress={onPress} />}
		/>
	)
}
// onPress={onPress(item.key)}
export default List
