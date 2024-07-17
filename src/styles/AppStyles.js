import styled from 'styled-components'

const Main = styled.main`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;
`

const Container = styled.div`
	max-width: 80rem;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	gap: 0.5em;
	padding: 0.5em;
`

export { Main, Container }