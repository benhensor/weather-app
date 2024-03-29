import React, { useEffect, useState }  from 'react'
import styled from 'styled-components'
import 'weather-icons/css/weather-icons.min.css'
import * as d3 from 'd3'
import { formatToLocalTime, mapOWNIconToWeatherIcons } from '../utils/Utils'
import { ReactComponent as UpArrow } from '../assets/wi-direction-up.svg'
import { ReactComponent as Humidity } from '../assets/wi-humidity.svg'
import { ReactComponent as Wind } from '../assets/wi-strong-wind.svg'
import { ReactComponent as Sunrise } from '../assets/wi-sunrise.svg'
import { ReactComponent as Sunset } from '../assets/wi-sunset.svg'
import { ReactComponent as Thermometer } from '../assets/wi-thermometer.svg'
import { ReactComponent as Barometer } from '../assets/wi-barometer.svg'


const StyledCurrentWeather = styled.section`
    display: flex;
    background-color: #77777775;
    border-radius: 1rem;
    padding: 0.5em;
    img {
        width: 2em;
        height: 2em;
        margin: 0 0.5rem;
    }
`

const CurrentConditions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: relative;
`

const Location = styled.p`
    position: absolute;
    top: 0.5em;
    left: 0.5em;
    font-size: 2.6rem;
    color: #fff;
`

const DateAndTime = styled.p`
    position: absolute;
    bottom: 1em;
    left: 1em;
    color: #fff;
	font-size: 0.7em;
	width: 100%;
`

const Display = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 2em 0;
    width: 100%;
    background-color: #77777775;
    border-radius: 1rem;
`

const Conditions = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    margin-top: 2em;
    z-index: 1;
    height: 100%; 
    p {
        position: absolute;
        top: 0.5em;
        left: 1em;
        font-size: 2.6rem;
        color: ${props => props.$bgColor};
    }
`

const Temperature = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 3%;
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 7rem;
    font-weight: 300;
    background-color: ${props => props.$bgColor};
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
    box-shadow: 0.2em 0.2em 0.1em #00000050;
    p {
        color: #333;
    }
`

const TempControls = styled.div`
    position: absolute;
    top: 1em;
    right: 1em;
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        background: #777;
        padding: 0.5em;
        border-radius: 50%;
        color: #ffffff;
        width: 2.5em;
        height: 2.5em;
        cursor: pointer;
        
    }
`

const TempIcon = styled.i`
    font-size: 3rem;
    color: #fff;
`

const WeatherIcon = styled.i`
    font-size: 7em;
    color: #fff;
    margin-top: 0.5em;
    margin-left: 0.4em;
`

const Details = styled.div`
    padding: 2em 0.5em;
    display: flex;
    flex-direction: column;
    gap: 2em;
    width: 100%;
    background-color: #77777775;
    border-radius: 1rem;
    margin-top: 0.5em;
`

const DetailRow = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

const DetailBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.4rem;
    text-align: center;
    p {
        width: 4.5em;
    }
    span {
        color: #fff;
    }
`

const createUnifiedTemperatureScale = () => {
    const celsiusRange = [-10, 0, 10, 15, 20, 25, 30, 35, 40]
    const colorRange = ['#4a90e2', '#7fb3d5', '#e4f5ff', '#f7dc6f', '#eb984e', '#f25a14', '#cb4335']
    return d3.scaleLinear().domain(celsiusRange).range(colorRange)
}

const getBackgroundColor = (temp, scale) => {
    return scale(temp)
}

export default function CurrentWeather({ weather: { details, icon, temp, temp_min, temp_max, sunrise, sunset, speed, humidity, dt, pressure, feels_like, timezone, name, country }}) {

    const scale = createUnifiedTemperatureScale()
    const [bgColor, setBgColor] = useState(getBackgroundColor(temp, scale))
    const [temperature, setTemperature] = useState(null)
    const [selectedUnit, setSelectedUnit] = useState('metric')

    const WeatherIconClass = mapOWNIconToWeatherIcons(icon)

    useEffect(() => {
        setBgColor(getBackgroundColor(temp, scale))
        updateTemperatureDisplay(temp)
    }, [temp, scale])

    const updateTemperatureDisplay = (tempCelsius) => {
        const tempFahrenheit = (tempCelsius * 9/5 + 32).toFixed()
        setTemperature(selectedUnit === 'metric' ? tempCelsius.toFixed() : tempFahrenheit)
    }

    const handleUnitsChange = () => {
        setSelectedUnit(prevUnit => prevUnit === 'metric' ? 'imperial' : 'metric')
    }

   
    
    

    return (
        <StyledCurrentWeather>
            <CurrentConditions>
                <Location>{`${name}, ${country}`}</Location>
                <Display >
                    <DateAndTime>
                        {formatToLocalTime(dt, timezone)}
                    </DateAndTime>
                    <Conditions $bgColor={bgColor}>
                        <p >{details}</p>
                        <WeatherIcon className={`wi ${WeatherIconClass}`}  />
                    </Conditions>
                    <Temperature $bgColor={bgColor}>
                        <p>{temperature}<span>˚</span></p>
                    </Temperature>
                    <TempControls>
                        {selectedUnit === 'metric' ? (
                            <button
                            aria-label='metric' 
                            name='metric' 
                            className='unit-metric'
                            onClick={handleUnitsChange}
                        >
                            <TempIcon className='wi wi-celsius'></TempIcon>
                        </button>
                        ) : (
                            <button 
                            aria-label='imperial'
                            name='imperial' 
                            className='unit-imperial'
                            onClick={handleUnitsChange}
                        >
                            <TempIcon className='wi wi-fahrenheit'></TempIcon>
                        </button>
                        )}                      
                    </TempControls>
                </Display>
                <Details>
                <DetailRow>
                    <DetailBlock>
                        <Thermometer style={{ fill: '#fff', width: '3em' }} />
                        <p>Real feel:<br/><span className='current-value'>{`${feels_like.toFixed()}°`}</span></p>
                    </DetailBlock>
                    <DetailBlock>
                        <Humidity style={{ fill: '#fff', width: '3em' }} />
                        <p>Humidity:<br/><span className='current-value'>{`${humidity.toFixed()}%`}</span></p>
                    </DetailBlock>
                    <DetailBlock>
                        <Wind style={{ fill: '#fff', width: '3em' }} />
                        <p>Wind:<br/><span className='current-value'>{`${speed.toFixed()} km/h`}</span></p>
                    </DetailBlock>
                    <DetailBlock>
                        <Barometer style={{ fill: '#fff', width: '3em' }} />
                        <p>Pressure:<br/><span className='current-value'>{`${pressure} mb`}</span></p>
                    </DetailBlock>
                </DetailRow>
                <DetailRow>
                    <DetailBlock>
                        <Sunrise style={{ fill: '#fff', width: '3em' }} />
                        <p>Sunrise:<br/><span>{formatToLocalTime(sunrise, timezone, 'HH:mm a')}</span></p>
                    </DetailBlock>       
                    <DetailBlock>
                        <Sunset style={{ fill: '#fff', width: '3em' }}  />
                        <p>Sunset:<br/><span className='current-value'>{formatToLocalTime(sunset, timezone, 'HH:mm a')}</span></p>
                    </DetailBlock>            
                    <DetailBlock>
                        <UpArrow style={{ fill: '#fff', width: '3em' }} />
                        <p>High:<br/><span>{`${temp_max.toFixed()}°`}</span></p>
                    </DetailBlock>          
                    <DetailBlock>
                        <UpArrow style={{ fill: '#fff', width: '3em', rotate: '180deg' }} />
                        <p>Low:<br/><span>{`${temp_min.toFixed()}°`}</span></p>
                    </DetailBlock>
                </DetailRow>
                </Details>
            </CurrentConditions>           
        </StyledCurrentWeather>
    )
}