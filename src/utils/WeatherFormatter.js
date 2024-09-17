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

export const formatForecastData = (data) => {
	const { list } = data
	const daily = [] // Array to hold daily summaries
	const hourlyByDay = {} // Object to group hourly data by day

	list.forEach((item) => {
		// Convert the timestamp into a Date object
		const date = new Date(item.dt * 1000)
		const day = date.toLocaleDateString('en-US', { weekday: 'short' }) // Format as 'Mon, 9/17'
		const time = date.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true }) // Format as '12 PM'

		// Prepare the hourly entry
		const hourlyEntry = {
			title: time,
			temp: item.main.temp,
			icon: item.weather[0].icon
		}

		// Group hourly data by day
		if (!hourlyByDay[day]) {
			hourlyByDay[day] = []
		}
		hourlyByDay[day].push(hourlyEntry)

		// Check if we've already created a daily entry for this day
		const existingDay = daily.find((d) => d.title === day)
		if (!existingDay) {
			// Add a daily entry (you can modify how you pick temp/icon for daily summary)
			daily.push({
				title: day,
				temp: item.main.temp, // This could be averaged, or you could pick the temp at midday, etc.
				icon: item.weather[0].icon
			})
		}
	})

	// Convert the hourly data into an array of days with hourly details
	const hourly = Object.keys(hourlyByDay).map((day) => ({
		day,
		hours: hourlyByDay[day]
	}))

	return { daily, hourly }
}
