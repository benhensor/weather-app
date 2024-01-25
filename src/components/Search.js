import React, { useState } from 'react'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { ReactComponent as Celsius } from '../assets/wi-celsius.svg'
import { ReactComponent as Fahrenheit } from '../assets/wi-fahrenheit.svg'

const StyledSearch = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.5em;
    padding: 0.5em;
    background-color: #77777775;
    border-radius: 1rem;
`

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
`

const SearchInput = styled.input`
    width: 12em;
    border: 1px solid #ffffff25;
    border-radius: 0.5rem;
    padding: 0.5em 1em;
    outline: none;
    color: #ddd;
    background: none;
    font-size: 1.6rem;
    margin-right: 1em;
    &::placeholder {
        color: #aaa;
        font-size: 1.6rem;
    }
    &:focus {
        outline: none;
        border: 1px solid #ffffff25;
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

const TempControls = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    p {
        position: absolute;
        right: 1.3em;
        color: #fff;
        font-size: 1.5em;
    }
`

const StyledCelsius = styled(Celsius)`
    position: absolute;
    right: 2em;
  fill: #fff; 
  height: 3em; 
  cursor: pointer;
`

const StyledFahrenheit = styled(Fahrenheit)`
    position: absolute;
    right: -0.5em;
  fill: #fff; 
  height: 3em; 
  cursor: pointer;
`



function Search({ setQuery, units, setUnits }) {

    const [city, setCity] = useState('')
    const [selectedUnit, setSelectedUnit] = useState('metric')

    const handleUnitsChange = (e) => {
        setSelectedUnit(e.currentTarget.name)
        if (units !== selectedUnit) setUnits(selectedUnit)
    }

    const handleSearchClick = () => {
        if (city !== '') setQuery({ q: city })
        setCity('')
    }

    const handleLocationClick = () => {
        if (navigator.geolocation) {
        
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude
            let lon = position.coords.longitude
            setQuery({ lat, lon })
        })
        }
    }

    return (
        <StyledSearch>
            <SearchContainer>
                <SearchInput
                    value={city} 
                    onChange={(e) => setCity(e.target.value)}
                    type='text'
                    placeholder='Search' 
                    onKeyDown={(e) => {e.key === 'Enter' && handleSearchClick()}}
                />

                <SearchIcons>
                    <SearchButton onClick={handleSearchClick}>
                        <FaSearch style={{ color: '#FFFFFF', fontSize: '1.3em', marginRight: '0.5em' }} />
                    </SearchButton>
                    <SearchButton onClick={handleLocationClick}>
                        <FaLocationDot style={{ color: '#FFFFFF', fontSize: '1.3em' }} />
                    </SearchButton>
                </SearchIcons>
            </SearchContainer>

            <TempControls>
                <StyledCelsius 
                    name='metric' 
                    onClick={() => handleUnitsChange}
                />
                <p className='unit-divider'>|</p>
                <StyledFahrenheit 
                    name='imperial' 
                    onClick={() => handleUnitsChange}/>
            </TempControls>
        </StyledSearch>
    )
}

export default Search;