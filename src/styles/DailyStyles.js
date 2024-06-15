import styled from 'styled-components'

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

export { DailyForecast, DailyForecastContainer, WeatherIcon, Day }