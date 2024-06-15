import React from 'react'
import 'weather-icons/css/weather-icons.min.css';
import { mapOWNIconToWeatherIcons } from '../utils/Utils'
import {
  HourlyForecast,
  HourlyForecastContainer,
  Hour,
  WeatherIcon,
} from '../styles/HourlyStyles'


const Hourly = ({ hourly }) => {

  return (
    <HourlyForecast className="hourly-forecast-container">
        <HourlyForecastContainer>
          {hourly.map((item, index) => (
            <Hour key={index}>
              <p>{item.title}</p>
              <WeatherIcon className={`wi ${mapOWNIconToWeatherIcons(item.icon)}`} />
              <p>{`${item.temp.toFixed()}°`}</p>
            </Hour>
          ))}
        </HourlyForecastContainer>
    </HourlyForecast>
  )
}

export default Hourly