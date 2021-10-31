import React from 'react';
import { Scatter as ChartScatter } from 'react-chartjs-2';
import styled from 'styled-components';


const StyledChart = styled.div`
  // position: fixed;
  top: 0;
  right: 0;
  width: 40%;
`

interface Data {
  x: number,
  y: number,
};

export type DataType = Data[];

type Props= {}

export class Scatter extends React.Component<Props> {

  private _data: any = null;

  constructor(props: Props) {
    super(props);

    this._data = {
      labels: ['Scatter'],
      datasets: [
        {
          label: 'scatter',
          fill: true,
          backgroundColor: 'rgba(75,192,192,0.4)',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 2,
          pointHoverRadius: 1,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          pointHitRadius: 5,
          data: [
            { x: 0, y: 0 },
          ]
        }
      ]
    };

  }

  componentDidMount(): void {
    this._data.datasets[0].data = [
      {x: 0, y: 0},
      {x: 1, y: 1},
      {x: 2, y: 2},
      {x: 3, y: 3},
      {x: 4, y: 4},
    ];

    this.forceUpdate();
  }

  setData(data: DataType) {
    this._data.datasets[0].data = data;
    this.forceUpdate();
  }

  render() {
    return (
      <StyledChart>
        <ChartScatter data={this._data} redraw />
      </StyledChart>
    )
  }
}

export default Scatter;
