import React from "react"
import styled from "styled-components/native"
import { View, FlatList, Text, TouchableOpacity } from "react-native"

const ListItem = styled(Text)`
	padding: 16px;
	background-color: #ebebed;
	margin: 5px 0px;
	border-radius: 5px;
`

const Item = ({ item }) => {
	return (
		<TouchableOpacity>
			<ListItem>{item.text} </ListItem>
		</TouchableOpacity>
	)
}

const List = ({ list }) => {
	return <FlatList data={list} renderItem={Item} />
}

export default List
