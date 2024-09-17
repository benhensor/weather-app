import styled from 'styled-components'

const StyledCurrentWeather = styled.section`
	display: flex;
	background-color: var(--bg-md);
	border-radius: var(--sm);
	padding: var(--xs);
	img {
		width: 2em;
		height: 2em;
		margin: 0 var(--xs);
	}
`

const CurrentConditions = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	position: relative;
`

const Location = styled.p`
	position: absolute;
	top: .4em;
	left: .4em;
	font-size: var(--fs-lg);
	color: var(--white);
	z-index: 1000;
`

const DateAndTime = styled.p`
	position: absolute;
	bottom: .8em;
	left: .8em;
	color: #fff;
	font-size: var(--fs-xs);
`

const Display = styled.div`
	position: relative;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: var(--lg) 0;
	width: 100%;
	background-color: var(--bg-lt);
	border-top-left-radius: var(--xs);
	border-top-right-radius: var(--xs);
`

const Conditions = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	position: relative;
	margin-top: var(--md);
	z-index: 1;
	height: 100%;
	p {
		position: absolute;
		top: .4em;
		left: .8em;
		font-size: var(--fs-xl);
		color: ${(props) => props.$bgColor};
	}
`

const Temperature = styled.div`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	right: 3%;
	z-index: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 7rem;
	font-weight: 300;
	background-color: ${(props) => props.$bgColor};
	border-radius: 50%;
	width: 2.4em;
	height: 2.4em;
	box-shadow: 0.2em 0.2em 0.1em #00000050;
	p {
		color: var(--grey);
	}
`

const TempControls = styled.div`
	position: absolute;
	top: .8em;
	right: .8em;
	button {
		display: flex;
		justify-content: center;
		align-items: center;
		border: none;
		background: var(--dk-grey);
		padding: var(--xs);
		border-radius: 50%;
		color: var(--white);
		width: 2.5em;
		height: 2.5em;
		cursor: pointer;
	}
`

const TempIcon = styled.i`
	font-size: var(--fs-xl);
	color: var(--white);
`

const WeatherIcon = styled.i`
	font-size: 7em;
	color: var(--white);
	margin-top: 0.5em;
	margin-left: 0.66em;
`

const Details = styled.div`
	padding: var(--lg) var(--xs);
	display: flex;
	flex-direction: column;
	gap: 2em;
	width: 100%;
	background-color: var(--bg-lt);
	border-bottom-left-radius: var(--xs);
	border-bottom-right-radius: var(--xs);
	margin-top: var(--xs);
`

const DetailRow = styled.div`
	display: flex;
	justify-content: space-around;
	width: 100%;
`

const DetailBlock = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 1.4rem;
	text-align: center;
	p {
		width: 4.5em;
	}
	span {
		color: var(--white);
	}
`

export {
	StyledCurrentWeather,
	CurrentConditions,
	Location,
	DateAndTime,
	Display,
	Conditions,
	Temperature,
	TempControls,
	TempIcon,
	WeatherIcon,
	Details,
	DetailRow,
	DetailBlock,
}
