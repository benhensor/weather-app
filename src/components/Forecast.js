import React, { useState } from 'react'
import Hourly from './Hourly'
import Daily from './Daily'
import { StyledForecast, Header, Heading, Buttons, ForecastContainer } from '../styles/ForecastStyles'


const Forecast = ({ hourly, daily, forecastData }) => {

  const [forecast, setForecast] = useState('hourly')

  const handleForecastChange = (e) => {
    setForecast(e.target.value)
  }

  const forecastSelector = forecast === 'hourly'


  return (
    <StyledForecast>
      <Header>
        <Heading>Forecast</Heading>
        <Buttons>
          <button
            className={`${forecastSelector ? 'selected' : ''}`}
            value='hourly'
            onClick={handleForecastChange}
            disabled={forecastSelector}
          >
            Hourly
          </button>
          <button
            className={`${!forecastSelector ? 'selected' : ''}`}
            value='daily'
            onClick={handleForecastChange}
            disabled={!forecastSelector}
          >
            Daily
          </button>
        </Buttons>
      </Header>
      <ForecastContainer>
      {forecastSelector ? (
        <Hourly hourly={hourly} />
      ) : (
        <Daily forecastData={forecastData} />
      )}
      </ForecastContainer>
    </StyledForecast>
  )
}

export default Forecast