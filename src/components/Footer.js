import React from 'react'
import { apiCallCount } from '../utils/WeatherService'
import {
	APICount,
	Separator
} from '../styles/FooterStyles'

export default function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<APICount>
			<div>
				<p>API calls: {apiCallCount}</p>
				<Separator>|</Separator>
				<p>Copyright &copy; {currentYear}</p>
			</div>
		</APICount>
	)
}
