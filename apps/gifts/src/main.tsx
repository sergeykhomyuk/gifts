import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import {
  Chart,
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
} from 'chart.js';

import App from './app/app';

Chart.register(
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip
);

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
