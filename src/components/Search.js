import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { StyledSearch, SearchContainer, SearchInput, SearchIcons, SearchButton } from '../styles/SearchStyles'


export default function Search({ setQuery, error }) {

    const [city, setCity] = useState('')

    const handleSearchClick = () => {
        const trimmedInput = city.trim()
        if (trimmedInput) {
            setQuery({ q: city })
            setCity('')
        } 
    }

    const handleLocationClick = () => {
        if (navigator.geolocation) {
        
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude
            let lon = position.coords.longitude
            setQuery({ lat, lon })
        },
        (error) => {
            console.log(error)
        }
    )} else {
        console.log('Geolocation is not supported by this browser.')
    }
    }


    return (
        <StyledSearch>
            <SearchContainer>
                <SearchInput
                    id='search-input'
                    value={city} 
                    onChange={(e) => setCity(e.target.value)}
                    type='text'
                    $errorMessage={error}
                    placeholder="Search..."
                    required
                    onKeyDown={(e) => {e.key === 'Enter' && handleSearchClick()}}
                />

                <SearchIcons className='search-location-icons-container'>
                    <SearchButton onClick={handleSearchClick} aria-label='Search-location'>
                        <FaSearch style={{ color: '#FFFFFF', fontSize: '1.5em', marginRight: '0.75em' }} />
                    </SearchButton>
                    <SearchButton onClick={handleLocationClick} aria-label='Use Current Location'>
                        <FaLocationDot style={{ color: '#FFFFFF', fontSize: '1.5em' }} />
                    </SearchButton>
                </SearchIcons>
            </SearchContainer>
        </StyledSearch>
    )
}