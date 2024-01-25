import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import getFormattedWeatherData from './utils/WeatherService'
import Forecast from './components/Forecast'
import CurrentWeather from './components/CurrentWeather'
import Search from './components/Search'

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
	max-width: 546px;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 0.5em;
	padding: 0 0.5em;
`

function App() {

	const [query, setQuery] = useState({ q: 'London' })
	const [units, setUnits] = useState('metric')
	const [weather, setWeather] = useState(null)

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				const lat = position.coords.latitude
				const lon = position.coords.longitude
				setQuery({ lat, lon })
			},
			(error) => {
				console.log(error)
			}
		)
	}, [])

	useEffect(() => {
		const fetchWeather = async () => {
			// const message = query.q ? query.q : 'current location.';

			await getFormattedWeatherData({ ...query, units }).then((data) => {
				setWeather(data)
			})
		}
		fetchWeather()
	}, [query, units])

	if (!weather) return null // Return null if weather prop is not available

	return (
		<Main>
			<Container>
				<Search weather={weather} setQuery={setQuery} units={units} setUnits={setUnits} />
				<CurrentWeather weather={weather} units={units} />
				<Forecast hourly={weather.hourly} daily={weather.daily} />
			</Container>
		</Main>
	)
}

export default App
