import { formatToLocalTime } from "./Utils"

export const formatWeather = ({
	coord: { lat, lon },
	main,
	name,
	dt,
	sys: { country, sunrise, sunset },
	weather,
	wind: { speed },
}) => {
	const { main: details, icon } = weather[0]
	const { temp, feels_like, temp_min, temp_max, humidity, pressure } = main

	return {
		lat,
		lon,
		temp,
		feels_like,
		temp_min,
		temp_max,
		humidity,
		pressure,
		name,
		dt,
		country,
		sunrise,
		sunset,
		details,
		icon,
		speed,
	}
}

export const formatForecast = (data) => {
	let { timezone, daily, hourly } = data

	daily = daily.slice(0, 7).map((d) => {
		return {
			title: formatToLocalTime(d.dt, timezone, "ccc"),
			temp: d.temp.day,
			icon: d.weather[0].icon,
		}
	})

	hourly = hourly.slice(0, 24).map((d) => {
		return {
			title: formatToLocalTime(d.dt, timezone, "H a"),
			temp: d.temp,
			icon: d.weather[0].icon,
		}
	})

	return { timezone, daily, hourly }
}
