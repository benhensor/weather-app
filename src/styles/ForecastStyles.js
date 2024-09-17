import styled from 'styled-components'

const StyledForecast = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: var(--bg-md);
  border-radius: var(--sm);
  padding: var(--xs);
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: var(--xs);
  background-color: var(--bg-lt);
  border-top-left-radius: var(--xs);
	border-top-right-radius: var(--xs);
  padding: var(--xs) var(--sm);
`

const Heading = styled.p`
  font-size: var(--fs-lg);
  color: var(--white);
`

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  gap: var(--xs);
  button {
    border: none;
    background: none;
    color: var(--white);
    font-size: var(--fs-md);
    padding: var(--sm);
    border-radius: var(--xs);
    cursor: pointer;
    &:hover {
      background-color: var(--bg-dk);
    }
    &.selected {
      color: var(--blue);
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