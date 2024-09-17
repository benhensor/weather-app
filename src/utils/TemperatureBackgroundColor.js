import * as d3 from 'd3'

export const createUnifiedTemperatureScale = () => {
	const celsiusRange = [-10, 0, 10, 15, 20, 25, 30, 35, 40]
	const colorRange = [
		'#4a90e2',
		'#7fb3d5',
		'#e4f5ff',
		'#f7dc6f',
		'#eb984e',
		'#f25a14',
		'#cb4335',
	]
	return d3.scaleLinear().domain(celsiusRange).range(colorRange)
}

export const getBackgroundColor = (temp, scale) => {
	return scale(temp)
}