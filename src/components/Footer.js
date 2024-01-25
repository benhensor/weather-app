import React from 'react'
import Styled from 'styled-components'
import { apiCallCount } from '../utils/WeatherService'

const APICount = Styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
	font-size: 0.7em;
	width: 100%;
	height: 100%;
	padding: 1em 0;
`

const Separator = Styled.p`
    margin: 0 0.5rem;
`

export default function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<APICount>
			<p>API calls: {apiCallCount}</p>
			<Separator>|</Separator>
			<p>Copyright &copy; {currentYear}</p>
		</APICount>
	)
}
