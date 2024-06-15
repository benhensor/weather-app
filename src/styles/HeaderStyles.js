import styled from 'styled-components'

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

export { StyledHeader, DateAndTime }