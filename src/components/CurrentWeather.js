import React, { useEffect, useState }  from 'react'
import styled from 'styled-components'
import 'weather-icons/css/weather-icons.min.css';
import * as d3 from 'd3'
import { formatToLocalTime, Images, mapOWNIconToWeatherIcons } from '../utils/Utils'


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
    top: 1em;
    left: 0.5em;
    font-size: 2.6rem;
    color: #fff;
`

const DateAndTime = styled.p`
    position: absolute;
    top: 1em;
    right: 1em;
    color: #fff;
	font-size: 0.7em;
	width: 100%;
	height: 100%;
	text-align: right;
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
    margin-left: 5%;
    z-index: 1;
    height: 100%; 
    p {
        position: absolute;
        top: 1em;
        left: 0;
        font-size: 2.6rem;
        color: ${props => props.$bgColor};
    }
`

const Temperature = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-40%);
    right: 3%;
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 7rem;
    font-weight: 300;
    background-color: ${props => props.$bgColor};
    border-radius: 50%;
    width: 2.7em;
    height: 2.7em;
    box-shadow: 0.2em 0.2em 0.1em #00000050;
    p {
        color: #333;
    
    }
`

const CurrentConditionsIcon = styled.i`
    font-size: 1.5em;
    color: #fff;
    width: 1em;
    height: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.2em;
`

const WeatherIcon = styled.i`
    font-size: 7em;
    color: #fff;
    margin-top: 0.5em;
    margin-left: 0.5em;
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

function CurrentWeather({ weather, units, weather: { details, icon, temp, temp_min, temp_max, sunrise, sunset, speed, humidity, dt, feels_like, timezone, name, country }}) {

    const [bgColor, setBgColor] = useState('#e4f5ff')

    const WeatherIconClass = mapOWNIconToWeatherIcons(icon)

    useEffect(() => {
        const celsiusRange = [-10, 0, 10, 20, 30, 40, 50]
        const fahrenheitRange = [-50, 32, 50, 68, 86, 104, 122]
        const colorRange = units === 'metric'
        ?  d3.scaleLinear().domain(celsiusRange).range(['#e4f5ff', '#98f3ff', '#00dffd', '#00d0aa', '#ffd500', '#f25a14', '#b00000'])
        : d3.scaleLinear().domain(fahrenheitRange).range(['#e4f5ff', '#98f3ff', '#00dffd', '#00d0aa', '#ffd500', '#f25a14', '#b00000'])
        setBgColor(colorRange(temp))
    }, [units, temp])

    return (
        <StyledCurrentWeather>
            <CurrentConditions>
                <Location>{`${name}, ${country}`}</Location>
                <DateAndTime>
                    {formatToLocalTime(weather.dt, weather.timezone)}
                </DateAndTime>
                <Display >
                    <Conditions $bgColor={bgColor}>
                        <p >{details}</p>
                        <WeatherIcon className={`wi ${WeatherIconClass}`}  />
                    </Conditions>
                    <Temperature $bgColor={bgColor}>
                        <p>{`${temp.toFixed()}°`}</p>
                    </Temperature>
                </Display>
                <Details>
                <DetailRow>
                    <DetailBlock>
                        <CurrentConditionsIcon className={`wi ${Images('Thermometer')}`}  />
                        <p>Real feel:<br/><span className='current-value'>{`${feels_like.toFixed()}°`}</span></p>
                    </DetailBlock>
                    <DetailBlock>
                        <CurrentConditionsIcon className={`wi ${Images('Humidity')}`}  />
                        <p>Humidity:<br/><span className='current-value'>{`${humidity.toFixed()}%`}</span></p>
                    </DetailBlock>
                    <DetailBlock>
                        <CurrentConditionsIcon className={`wi ${Images('Wind')}`}  />
                        <p>Wind:<br/><span className='current-value'>{`${speed.toFixed()} km/h`}</span></p>
                    </DetailBlock>
                </DetailRow>
                <DetailRow>
                    <DetailBlock>
                        <CurrentConditionsIcon className={`wi ${Images('Sunrise')}`}  />
                        <p>Sunrise:<br/><span>{formatToLocalTime(sunrise, timezone, 'HH:mm a')}</span></p>
                    </DetailBlock>       
                    <DetailBlock>
                        <CurrentConditionsIcon className={`wi ${Images('Sunset')}`}  />
                        <p>Sunset:<br/><span className='current-value'>{formatToLocalTime(sunset, timezone, 'HH:mm a')}</span></p>
                    </DetailBlock>            
                    <DetailBlock>
                        <CurrentConditionsIcon className={`wi ${Images('UpArrow')}`}  />
                        <p>High:<br/><span>{`${temp_max.toFixed()}°`}</span></p>
                    </DetailBlock>          
                    <DetailBlock>
                        <CurrentConditionsIcon className={`wi ${Images('DownArrow')}`}  />
                        <p>Low:<br/><span>{`${temp_min.toFixed()}°`}</span></p>
                    </DetailBlock>
                </DetailRow>
                </Details>
            </CurrentConditions>           
        </StyledCurrentWeather>
    )
}

export default CurrentWeather