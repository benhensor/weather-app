import { DateTime } from 'luxon'

export const formatToLocalTime = (secs, zone, format = "cccc, dd LLL yyyy' | 'H:mm a") => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

export const Images = (path) => {
    switch (path) {
        case 'DownArrow': return 'wi-direction-down' 
        case 'UpArrow': return 'wi-direction-up' 
        case 'Sunrise': return 'wi-sunrise' 
        case 'Sunset': return 'wi-sunset' 
        case 'Humidity': return 'wi-humidity' 
        case 'Wind': return 'wi-strong-wind' 
        case 'Thermometer': return 'wi-thermometer' 
        case 'Sun': return 'wi-day-sunny' 
        case 'Celsius': return 'wi-celsius' 
        case 'Fahrenheit': return 'wi-fahrenheit' 
        case 'Degrees': return 'wi-degrees' 
        default: return null
    }
}

export const mapOWNIconToWeatherIcons = (icon) => {
    switch (icon) {
        
        case '01d': return 'wi-day-sunny';
        case '01n': return 'wi-night-clear';       
        case '02d': return 'wi-day-cloudy';          
        case '02n': return 'wi-night-alt-cloudy';       
        case '03d': return 'wi-day-cloudy';
        case '03n': return 'wi-night-alt-cloudy';
        case '04d': return 'wi-cloudy';
        case '04n': return 'wi-cloudy';
        case '09d': return 'wi-day-showers';
        case '09n': return 'wi-night-alt-showers';
        case '10d': return 'wi-day-rain';
        case '10n': return 'wi-night-alt-rain';
        case '11d': return 'wi-day-thunderstorm';
        case '11n': return 'wi-night-alt-thunderstorm';
        case '13d': return 'wi-day-snow';
        case '13n': return 'wi-night-alt-snow';
        case '50d': return 'wi-day-fog';
        case '50n': return 'wi-night-fog';

        default: return 'wi-na';
    }
}