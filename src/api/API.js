const BASE_URL = process.env.REACT_APP_BASE_URL // || 'https://api.openweathermap.org/data/2.5'
const API_KEY = process.env.REACT_APP_API_KEY

// get weather data from api call and return json data
export const fetchWeatherData = async(infoType, searchParams) => {
    try {
        const url = new URL(`${BASE_URL}/${infoType}`)
        url.search = new URLSearchParams({ ...searchParams, appId: API_KEY })

        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`API call failed: ${response.status}`)
        }
        return response.json()
    } catch (error) {
        console.error('Error fetching weather data: ', error)
        throw error
    }
}

// get 5 day /3 hour forecast data from api call and return json data
export const fetchForecastData = async(searchParams) => {
    try {
        const url = new URL(`${BASE_URL}/forecast`)
        url.search = new URLSearchParams({ ...searchParams, appId: API_KEY })

        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`API call failed: ${response.status}`)
        }
        return response.json()
    } catch (error) {
        console.error('Error fetching forecast data: ', error)
        throw error
    }
}