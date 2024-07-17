import React, { useEffect, useState } from 'react'
import getFormattedWeatherData from './utils/WeatherService'
import Footer from './components/Footer'
import Forecast from './components/Forecast'
import CurrentWeather from './components/CurrentWeather'
import Search from './components/Search'
import { Main, Container } from './styles/AppStyles'

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
				<Footer />
			</Container>
		</Main>
	)
}

export default App
