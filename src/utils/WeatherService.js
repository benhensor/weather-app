import { fetchWeatherData } from '../api/API'
import { formatWeather, formatForecast } from './WeatherFormatter'

let apiCallCount = localStorage.getItem('apiCallCount') || 0

export const getFormattedWeatherData = async (searchParams) => {
	const formattedCurrentWeather = await fetchWeatherData(
		'weather',
		searchParams
	).then(formatWeather)
	const { lat, lon } = formattedCurrentWeather

	apiCallCount++; // Move api call count increment here
	localStorage.setItem('apiCallCount', apiCallCount)

	const formattedForecastWeather = await fetchWeatherData('onecall', {
		lat,
		lon,
		exclude: 'current,minutely,alerts',
		units: searchParams.units,
	}).then(formatForecast)

	return { ...formattedCurrentWeather, ...formattedForecastWeather }
}

export { apiCallCount }

export default getFormattedWeatherData;