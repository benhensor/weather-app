import React from 'react'
import 'weather-icons/css/weather-icons.min.css';
import { mapOWNIconToWeatherIcons } from '../utils/Utils'
import {
  DailyForecast,
  DailyForecastContainer,
  Day,
  WeatherIcon,
} from '../styles/DailyStyles'

const Daily = ({ daily }) => {

  
  return (
    <DailyForecast>
      <DailyForecastContainer>
        {daily.map((item, index) => (
          <Day className='forecast-item' key={index}>
            <p className='forecast-item-title'>{item.title}</p>
            <WeatherIcon className={`wi ${mapOWNIconToWeatherIcons(item.icon)}`} />
            <p className='forecast-item-temp'>{`${item.temp.toFixed()}°`}</p>
          </Day>
        ))}
      </DailyForecastContainer>
    </DailyForecast>
  )
}

export default Daily