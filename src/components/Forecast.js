import React, { useState } from 'react'
import Hourly from './Hourly'
import Daily from './Daily'
import { StyledForecast, Header, Heading, Buttons, ForecastContainer } from '../styles/ForecastStyles'


const Forecast = ({ hourly, daily }) => {

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
            className={`forecast-selector-button ${forecastSelector ? 'selected' : ''}`}
            value='hourly'
            onClick={handleForecastChange}
            disabled={forecastSelector}
          >
            Hourly
          </button>
          <button
            className={`forecast-selector-button ${!forecastSelector ? 'selected' : ''}`}
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
        <Daily daily={daily} />
      )}
      </ForecastContainer>
    </StyledForecast>
  )
}

export default Forecast