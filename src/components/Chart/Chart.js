import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css'

const Chart = (props) => {
const dataPointValue= props.dataPoints.map(dataPoint=> dataPoint.value)
const maxDataPointValue= Math.max(...dataPointValue)
console.log(dataPointValue);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            label={dataPoint.label}
            value={dataPoint.value}
            maxValue={maxDataPointValue}
          />
        )
      })}
    </div>
  )
}

export default Chart;
