import styled from 'styled-components'

const StyledForecast = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: #77777775;
  border-radius: 1rem;
  padding: 0.5em;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: .5em;
  background-color: #77777775;
  border-radius: .5em;
  padding: 0.5em;
`

const Heading = styled.p`
  font-size: 2rem;
  color: #fff;
`

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  gap: 0.5em;
  button {
    border: none;
    background: none;
    color: #fff;
    font-size: 1.6rem;
    padding: 0.5em 1em;
    border-radius: 0.5rem;
    cursor: pointer;
    &:hover {
      background-color: #ffffff25;
    }
    &.selected {
      background-color: #ffffff25;
    }
  
  }
`

const ForecastContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export { StyledForecast, Header, Heading, Buttons, ForecastContainer }