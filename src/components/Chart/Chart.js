import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
  return (
    <div className='chart'>
      {props.chartDataPoints.map((chartDataPoint) => (
        <ChartBar
          value={chartDataPoint.value}
          maxValue={null}
          label={chartDataPoint.label}
          key={chartDataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
