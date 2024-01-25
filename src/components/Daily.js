import React from 'react'
import styled from 'styled-components'
import 'weather-icons/css/weather-icons.min.css';
import { mapOWNIconToWeatherIcons } from '../utils/Utils'

const DailyForecast = styled.section`
    width: 100%;
    padding: 2em 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid #ffffff25;
    border-bottom: 1px solid #ffffff25;
`

const DailyForecastContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

const WeatherIcon = styled.i`
    font-size: 2em;
    color: #fff;
`

const Day = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5em;
    width: 100%;
`

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