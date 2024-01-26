import React, { useState } from 'react'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'

const StyledSearch = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5em;
    background-color: #77777775;
    border-radius: 1rem;
    margin-top: 0.5em;
`

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`

const SearchInput = styled.input`
    min-width: 10em;
    width: 65%;
    border: 1px solid #ffffff25;
    border-radius: 0.5rem;
    padding: 0.5em 1em;
    outline: none;
    color: #ddd;
    background: none;
    font-size: 1.6rem;
    margin-right: 1em;
    position: relative;
    &::placeholder {
        color: #aaa;
        font-size: 1.6rem;
    }
    &:focus {
        outline: none;
        border: 1px solid #ffffff25;
    }
    &::before {
        content: "${props => props.errorMessage}";
        color: red;
        position: absolute;
        top: 0;
        left: 100%;
        padding: 0.5em 1em;
        font-size: 1.2rem;
    }
`

const SearchIcons = styled.div`
    display: flex;
    align-items: center;
`

const SearchButton = styled.button`
    border: none;
    background: none;
    img {
        width: 2em;
        height: 2em;
        margin: 0 0.5rem;
        cursor: pointer;
    }
`

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