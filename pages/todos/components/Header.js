import React from "react"
import styled from "styled-components/native"
import { Text, View, SafeAreaView } from "react-native"

const Container = styled(View)`
	width: 100%;
	padding-top: 30px;
	padding-bottom: 20px;
	background-color: #592be3;
`

const HeaderText = styled(Text)`
	font-weight: 700;
	font-size: 20px;
	text-align: center;
	color: #fff;
`

const Header = () => {
	return (
		<Container>
			<SafeAreaView>
				<HeaderText> React Native App </HeaderText>
			</SafeAreaView>
		</Container>
	)
}

export default Header
