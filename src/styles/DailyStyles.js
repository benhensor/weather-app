import styled from 'styled-components'

const DailyForecast = styled.section`
  z-index: 1;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-bottom-left-radius: var(--xs);
	border-bottom-right-radius: var(--xs);
`

const DailyForecastContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
  background-color: var(--bg-lt);
  padding: var(--md) 0;
  margin-bottom: var(--xs);
`

const WeatherIcon = styled.i`
	font-size: var(--fs-xl);
	color: ${({ $color }) => $color};
`

const Day = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: var(--md);
	width: 100%;
	cursor: pointer;
  position: relative;
`

const Title = styled.p`
  font-size: clamp(var(--fs-sm), 2vw, var(--fs-md));
  color: ${({ $isActive }) => $isActive ? 'var(--blue)' : 'var(--white)'};
`

const Temp = styled.p`
	font-size: var(--fs-md);
	color: var(--white);
`

const Wedge = styled.div`
  position: absolute;
  bottom: -2rem;
  width: 65%;
  height: var(--xs);
  background-color: var(--blue);
`

export { DailyForecast, DailyForecastContainer, WeatherIcon, Day, Title, Temp, Wedge }
