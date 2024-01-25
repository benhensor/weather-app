import React from 'react'
import styled from 'styled-components'
import { formatToLocalTime } from '../utils/Utils'

const StyledHeader = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	padding-right: 1em;
`

const DateAndTime = styled.p`
	font-size: 0.7em;
	width: 100%;
	height: 100%;
	text-align: right;
	padding: 0.5em 0;
`

const Header = ({ weather }) => {
	if (!weather) return null // Return null if weather prop is not available

	return (
		<StyledHeader>
			<DateAndTime>
				{formatToLocalTime(weather.dt, weather.timezone)}
			</DateAndTime>
		</StyledHeader>
	)
}

export default Header
