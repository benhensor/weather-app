import styled from 'styled-components'

const StyledCurrentWeather = styled.section`
	display: flex;
	background-color: #77777775;
	border-radius: 1rem;
	padding: 0.5em;
	img {
		width: 2em;
		height: 2em;
		margin: 0 0.5rem;
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
	top: 0.5em;
	left: 0.5em;
	font-size: 2.6rem;
	color: #fff;
`

const DateAndTime = styled.p`
	position: absolute;
	bottom: 1em;
	left: 1em;
	color: #fff;
	font-size: 0.7em;
	width: 100%;
`

const Display = styled.div`
	position: relative;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 2em 0;
	width: 100%;
	background-color: #77777775;
	border-radius: 1rem;
`

const Conditions = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	position: relative;
	margin-top: 2em;
	z-index: 1;
	height: 100%;
	p {
		position: absolute;
		top: 0.5em;
		left: 1em;
		font-size: 2.6rem;
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
	width: 2.5em;
	height: 2.5em;
	box-shadow: 0.2em 0.2em 0.1em #00000050;
	p {
		color: #333;
	}
`

const TempControls = styled.div`
	position: absolute;
	top: 1em;
	right: 1em;
	button {
		display: flex;
		justify-content: center;
		align-items: center;
		border: none;
		background: #777;
		padding: 0.5em;
		border-radius: 50%;
		color: #ffffff;
		width: 2.5em;
		height: 2.5em;
		cursor: pointer;
	}
`

const TempIcon = styled.i`
	font-size: 3rem;
	color: #fff;
`

const WeatherIcon = styled.i`
	font-size: 7em;
	color: #fff;
	margin-top: 0.5em;
	margin-left: 0.4em;
`

const Details = styled.div`
	padding: 2em 0.5em;
	display: flex;
	flex-direction: column;
	gap: 2em;
	width: 100%;
	background-color: #77777775;
	border-radius: 1rem;
	margin-top: 0.5em;
`

const DetailRow = styled.div`
	display: flex;
	justify-content: space-between;
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
		color: #fff;
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
