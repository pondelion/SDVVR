import React from 'react';
import { Scatter as ChartScatter } from 'react-chartjs-2';
import styled from 'styled-components';
import { ChartContext, ChartContextValue } from '../../../contexts/Contexts';


const StyledChart = styled.div`
  // position: fixed;
  top: 0;
  right: 0;
  width: 40%;
`

interface Data2D {
  x: number,
  y: number,
};

export type DataType2D = Data2D[];

type Props= {
  data: DataType2D,
  tag: string
}


export const Scatter2D: React.FC<Props> = (props: Props) => {

  const chartContextValue = React.useContext(ChartContext);

  const data = {
    labels: ['Scatter'],
    datasets: [
      {
        label: 'data',
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.4)',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 2,
        pointHoverRadius: 1,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 2,
        pointHitRadius: 5,
        data: props.data,
      }
    ]
  };
  const options = {
    responsive: true,
    legend: {
      display: true
    },
    animation: {
      duration: 0
    }
  }

  return (
    // <StyledChart>
      <ChartScatter
        data={data}
        options={options}
        redraw={true}
        ref={(ref) => {
          if (chartContextValue.chartRefs !== undefined && chartContextValue.setChartRefs !== undefined) {
            const refs: any = chartContextValue.chartRefs;
            refs[props.tag] = ref;
            chartContextValue.setChartRefs(refs);
            console.log(refs);
          }
        }}
      />
    // </StyledChart>
  )

}

// export default Scatter;
