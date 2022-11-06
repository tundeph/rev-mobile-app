import React from "react"
import styled from "styled-components/native"
import { Text, View } from "react-native"

const Container = styled(View)`
	width: 100%;
	padding-top: 30px;
	padding-bottom: 20px;
	background-color: #592be3;
	/* align-items: center; */
`

const HeaderText = styled(Text)`
	font-weight: 900;
	font-size: 20px;
	text-transform: uppercase;
	text-align: center;
	color: #fff;
`

const Header = () => {
	return (
		<Container>
			<HeaderText> Todo </HeaderText>
		</Container>
	)
}

export default Header
