import styled from 'styled-components'

const StyledHeader = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	padding-right: var(--sm);
`

const DateAndTime = styled.p`
	font-size: var(--fs-xxs);
	width: 100%;
	height: 100%;
	text-align: right;
	padding: var(--xs) 0;
`

export { StyledHeader, DateAndTime }