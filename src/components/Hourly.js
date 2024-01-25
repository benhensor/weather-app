import React from 'react'
import styled from 'styled-components'
import 'weather-icons/css/weather-icons.min.css';
import { mapOWNIconToWeatherIcons } from '../utils/Utils'

const HourlyForecast = styled.section`
    width: 100%;
    padding: 2em 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid #ffffff25;
    border-bottom: 1px solid #ffffff25;
    div {
    }
    p {
      font-size: 1rem;
    }
`

const HourlyForecastContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    align-items: center;
    gap: 1em;
    width: 100%;
`

const Hour = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5em;
    width: 100%;
`

const WeatherIcon = styled.i`
    font-size: 2em;
    color: #fff;
`

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