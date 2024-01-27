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
	height: 100%;
	display: flex;
	flex-direction: column;
	gap: 0.5em;
	padding: 0 0.5em;
`

function App() {

	const [query, setQuery] = useState({ q: 'London' })
	const [units, setUnits] = useState('metric')
	const [weather, setWeather] = useState(null)
	const [error, setError] = useState(null)

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
			try {
				const data = await getFormattedWeatherData({ ...query, units })
				setWeather(data)
				setError(null)
			} catch (error) {
				console.log(error)
				setError('Invalid search')
			}
		}
		fetchWeather()
	}, [query, units])


	if (!weather) return null

	return (
		<Main>
			<Container>
				<Search weather={weather} setQuery={setQuery} error={error}/>
				<CurrentWeather weather={weather} units={units} setUnits={setUnits} />
				<Forecast hourly={weather.hourly} daily={weather.daily} />
			</Container>
		</Main>
	)
}

export default App
