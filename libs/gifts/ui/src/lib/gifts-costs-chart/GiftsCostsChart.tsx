import { useLayoutEffect, useRef } from 'react';
import { Chart } from 'chart.js';
import { formatMonth, formatPrice } from '@and-open/core/utils';
import './GiftsCostsChart.module.scss';

export interface GiftsCostsChartProps {
  giftsCostsByMonth: number[];
  cumulativeGiftsCostsByMonth: number[];
}

export function GiftsCostsChart({
  giftsCostsByMonth,
  cumulativeGiftsCostsByMonth,
}: GiftsCostsChartProps) {
  const containerRef = useRef<HTMLCanvasElement>(null);

  useLayoutEffect(() => {
    const containerElement = containerRef.current;
    if (!containerElement) {
      return;
    }

    const chart = new Chart(containerElement, {
      type: 'line',
      data: {
        labels: new Array(12)
          .fill(0)
          .map((_, monthIndex) => formatMonth(monthIndex + 1)),
        datasets: [
          {
            label: 'Monthly',
            data: [...giftsCostsByMonth],
            fill: false,
            tension: 0.4,
            borderColor: 'rgb(54, 162, 235)',
          },
          {
            label: 'Cumulative',
            data: [...cumulativeGiftsCostsByMonth],
            fill: false,
            tension: 0.4,
            borderColor: 'rgb(255, 99, 132)',
          },
        ],
      },
      options: {
        aspectRatio: 2,
        scales: {
          y: {
            ticks: {
              callback: (value) => formatPrice(value as number),
            },
            beginAtZero: true,
          },
        },
        animation: false,
      },
    });
    return () => {
      chart.destroy();
    };
  }, [giftsCostsByMonth, cumulativeGiftsCostsByMonth]);

  return <canvas ref={containerRef}></canvas>;
}

export default GiftsCostsChart;
