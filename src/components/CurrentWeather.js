import React, { useEffect, useState } from 'react'
import 'weather-icons/css/weather-icons.min.css'
import * as d3 from 'd3'
import { formatToLocalTime, mapOWNIconToWeatherIcons } from '../utils/Utils'
import { ReactComponent as UpArrow } from '../assets/wi-direction-up.svg'
import { ReactComponent as Humidity } from '../assets/wi-humidity.svg'
import { ReactComponent as Wind } from '../assets/wi-strong-wind.svg'
import { ReactComponent as Sunrise } from '../assets/wi-sunrise.svg'
import { ReactComponent as Sunset } from '../assets/wi-sunset.svg'
import { ReactComponent as Thermometer } from '../assets/wi-thermometer.svg'
import { ReactComponent as Barometer } from '../assets/wi-barometer.svg'
import {
	StyledCurrentWeather,
	CurrentConditions,
	Location,
	DateAndTime,
	Display,
	Conditions,
	WeatherIcon,
	Temperature,
	TempControls,
	TempIcon,
	Details,
	DetailRow,
	DetailBlock,
} from '../styles/CurrentWeatherStyles'

const createUnifiedTemperatureScale = () => {
	const celsiusRange = [-10, 0, 10, 15, 20, 25, 30, 35, 40]
	const colorRange = [
		'#4a90e2',
		'#7fb3d5',
		'#e4f5ff',
		'#f7dc6f',
		'#eb984e',
		'#f25a14',
		'#cb4335',
	]
	return d3.scaleLinear().domain(celsiusRange).range(colorRange)
}

const getBackgroundColor = (temp, scale) => {
	return scale(temp)
}

export default function CurrentWeather({
	weather: {
		details,
		icon,
		temp,
		temp_min,
		temp_max,
		sunrise,
		sunset,
		speed,
		humidity,
		dt,
		pressure,
		feels_like,
		timezone,
		name,
		country,
	},
}) {
	const scale = createUnifiedTemperatureScale()
	const [bgColor, setBgColor] = useState(getBackgroundColor(temp, scale))
	const [temperature, setTemperature] = useState(null)
	const [selectedUnit, setSelectedUnit] = useState('metric')

	const WeatherIconClass = mapOWNIconToWeatherIcons(icon)

	useEffect(() => {
		const updateTemperatureDisplay = (tempCelsius) => {
			const tempFahrenheit = ((tempCelsius * 9) / 5 + 32).toFixed()
			setTemperature(
				selectedUnit === 'metric'
					? tempCelsius.toFixed()
					: tempFahrenheit
			)
		}
		setBgColor(getBackgroundColor(temp, scale))
		updateTemperatureDisplay(temp)
	}, [temp, scale, selectedUnit])

	const handleUnitsChange = () => {
		setSelectedUnit((prevUnit) =>
			prevUnit === 'metric' ? 'imperial' : 'metric'
		)
	}

	return (
		<StyledCurrentWeather>
			<CurrentConditions>
				<Location>{`${name}, ${country}`}</Location>
				<Display>
					<DateAndTime>{formatToLocalTime(dt, timezone)}</DateAndTime>
					<Conditions $bgColor={bgColor}>
						<p>{details}</p>
						<WeatherIcon className={`wi ${WeatherIconClass}`} />
					</Conditions>
					<Temperature $bgColor={bgColor}>
						<p>
							{temperature}
							<span>˚</span>
						</p>
					</Temperature>
					<TempControls>
						{selectedUnit === 'metric' ? (
							<button
								aria-label="metric"
								name="metric"
								className="unit-metric"
								onClick={handleUnitsChange}
							>
								<TempIcon className="wi wi-celsius"></TempIcon>
							</button>
						) : (
							<button
								aria-label="imperial"
								name="imperial"
								className="unit-imperial"
								onClick={handleUnitsChange}
							>
								<TempIcon className="wi wi-fahrenheit"></TempIcon>
							</button>
						)}
					</TempControls>
				</Display>
				<Details>
					<DetailRow>
						<DetailBlock>
							<Thermometer
								style={{ fill: '#fff', width: '3em' }}
							/>
							<p>
								Real feel:
								<br />
								<span className="current-value">{`${feels_like.toFixed()}°`}</span>
							</p>
						</DetailBlock>
						<DetailBlock>
							<Humidity style={{ fill: '#fff', width: '3em' }} />
							<p>
								Humidity:
								<br />
								<span className="current-value">{`${humidity.toFixed()}%`}</span>
							</p>
						</DetailBlock>
						<DetailBlock>
							<Wind style={{ fill: '#fff', width: '3em' }} />
							<p>
								Wind:
								<br />
								<span className="current-value">{`${speed.toFixed()} km/h`}</span>
							</p>
						</DetailBlock>
						<DetailBlock>
							<Barometer style={{ fill: '#fff', width: '3em' }} />
							<p>
								Pressure:
								<br />
								<span className="current-value">{`${pressure} mb`}</span>
							</p>
						</DetailBlock>
					</DetailRow>
					<DetailRow>
						<DetailBlock>
							<Sunrise style={{ fill: '#fff', width: '3em' }} />
							<p>
								Sunrise:
								<br />
								<span>
									{formatToLocalTime(
										sunrise,
										timezone,
										'HH:mm a'
									)}
								</span>
							</p>
						</DetailBlock>
						<DetailBlock>
							<Sunset style={{ fill: '#fff', width: '3em' }} />
							<p>
								Sunset:
								<br />
								<span className="current-value">
									{formatToLocalTime(
										sunset,
										timezone,
										'HH:mm a'
									)}
								</span>
							</p>
						</DetailBlock>
						<DetailBlock>
							<UpArrow style={{ fill: '#fff', width: '3em' }} />
							<p>
								High:
								<br />
								<span>{`${temp_max.toFixed()}°`}</span>
							</p>
						</DetailBlock>
						<DetailBlock>
							<UpArrow
								style={{
									fill: '#fff',
									width: '3em',
									rotate: '180deg',
								}}
							/>
							<p>
								Low:
								<br />
								<span>{`${temp_min.toFixed()}°`}</span>
							</p>
						</DetailBlock>
					</DetailRow>
				</Details>
			</CurrentConditions>
		</StyledCurrentWeather>
	)
}
