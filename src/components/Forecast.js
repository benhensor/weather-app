import React, { useState } from 'react'
import styled from 'styled-components'
import Hourly from './Hourly'
import Daily from './Daily'
import Footer from './Footer'

const StyledForecast = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: #77777775;
  border-radius: 1rem;
  padding: 1em 0.5em;
`

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-bottom: 1em;
  button {
    border: none;
    background: none;
    color: #fff;
    font-size: 1.2rem;
    padding: 0.5em 1em;
    border-radius: 0.5rem;
    cursor: pointer;
    &:hover {
      background-color: #ffffff25;
    }
    &.selected {
      background-color: #ffffff25;
    }
  
  }
`

const ForecastContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`


const Forecast = ({ hourly, daily }) => {

  const [forecast, setForecast] = useState('hourly')

  const handleForecastChange = (e) => {
    setForecast(e.target.value)
  }

  const forecastSelector = forecast === 'hourly'


  return (
    <StyledForecast>
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
      <ForecastContainer>
      {forecastSelector ? (
        <Hourly hourly={hourly} />
      ) : (
        <Daily daily={daily} />
      )}
      </ForecastContainer>
      <Footer />
    </StyledForecast>
  )
}

export default Forecast