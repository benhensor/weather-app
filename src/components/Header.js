import React from 'react'
import { formatToLocalTime } from '../utils/Utils'
import {
	StyledHeader,
	DateAndTime
} from '../styles/HeaderStyles'

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
