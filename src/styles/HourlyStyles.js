import styled from 'styled-components'

const HourlyForecast = styled.section`
  z-index: 2;
  padding: var(--md) 0;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: var(--bg-lt);
	border-bottom-left-radius: var(--xs);
	border-bottom-right-radius: var(--xs);
	p {
		font-size: var(--fs-xs);
	}
`

const HourlyForecastContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	align-items: center;
  width: 100%;
  padding: 0 var(--sm);
	& > * {
		border-bottom: 1px dashed var(--dk-grey);
    padding-bottom: var(--sm);
    margin-bottom: var(--sm);
	}

	/* Remove border from the last row items */
	& > :nth-last-child(-n + 6) {
		border-bottom: none;
	}
`

const Hour = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: var(--md);
	width: 100%;
`

const WeatherIcon = styled.i`
	font-size: var(--fs-xl);
	color: ${({ $color }) => $color};
`

const Temp = styled.p`
	font-size: var(--fs-md);
	color: #fff;
`

export { HourlyForecast, HourlyForecastContainer, WeatherIcon, Hour, Temp }
