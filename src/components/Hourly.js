import React from 'react'
import 'weather-icons/css/weather-icons.min.css'
import { mapOWNIconToWeatherIcons } from '../utils/Utils'
import {
	createUnifiedTemperatureScale,
	getBackgroundColor,
} from '../utils/TemperatureBackgroundColor'
import {
	HourlyForecast,
	HourlyForecastContainer,
	Hour,
	WeatherIcon,
	Temp,
} from '../styles/HourlyStyles'

const Hourly = ({ hourly }) => {
  const scale = createUnifiedTemperatureScale()

	return (
		<HourlyForecast>
			<HourlyForecastContainer>
				{hourly.map((item, index) => {
          const bgColor = getBackgroundColor(item.temp, scale)
          return (
            <Hour key={index}>
              <p>{item.title}</p>
              <WeatherIcon
                className={`wi ${mapOWNIconToWeatherIcons(
                  item.icon
                )}`}
                $color={bgColor}
              />
              <Temp>{`${item.temp.toFixed()}°`}</Temp>
            </Hour>
          )
        })}
			</HourlyForecastContainer>
		</HourlyForecast>
	)
}

export default Hourly
