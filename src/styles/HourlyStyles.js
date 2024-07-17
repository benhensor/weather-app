import styled from 'styled-components'

const HourlyForecast = styled.section`
    width: 100%;
    padding: 2em 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #77777775;
    border-radius: .5em;
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

export { HourlyForecast, HourlyForecastContainer, WeatherIcon, Hour }