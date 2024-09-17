import React, { useState } from 'react'
import 'weather-icons/css/weather-icons.min.css'
import { mapOWNIconToWeatherIcons } from '../utils/Utils'
import Hourly from './Hourly'
import {
	createUnifiedTemperatureScale,
	getBackgroundColor,
} from '../utils/TemperatureBackgroundColor'
import {
	DailyForecast,
	DailyForecastContainer,
	Day,
  Title,
	WeatherIcon,
	Temp,
  Wedge,
} from '../styles/DailyStyles'

const Daily = ({ forecastData }) => {
	const { daily, hourly } = forecastData
	const scale = createUnifiedTemperatureScale()

	const [selectedDayIndex, setSelectedDayIndex] = useState(0)

	const handleClick = (index) => {
		setSelectedDayIndex(index) // Update state with the clicked day index
	}

	// Filter hourly data based on selected day
	const filteredHourly =
		hourly.find((item) => item.day === daily[selectedDayIndex].title)
			?.hours || []

	return (
    <DailyForecast>
      <DailyForecastContainer>
        {daily.map((item, index) => {
          const bgColor = getBackgroundColor(item.temp, scale)
          return (
            <Day 
              key={index} 
              onClick={() => handleClick(index)}
              $isActive={index === selectedDayIndex}
            >
              <Title
                $isActive={index === selectedDayIndex}
              >
                {item.title}
              </Title>
              <WeatherIcon
                className={`wi ${mapOWNIconToWeatherIcons(
                  item.icon
                )}`}
                $color={bgColor}
              />
              <Temp>{`${item.temp.toFixed()}°`}</Temp>
              { index === selectedDayIndex &&
                <Wedge />
              }
            </Day>
          )
        })}
      </DailyForecastContainer>

      <Hourly hourly={filteredHourly} />
    </DailyForecast>
	)
}

export default Daily
