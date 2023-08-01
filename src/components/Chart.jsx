import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

export default function Chart() {
      ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      );
      const options = {
        responsive: true,
        plugins: {
          title: {
            display: true,
            // text: 'Chart.js Line Chart',
          },
        },
      };

      const labels = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
      ];
      const data = {
        labels,
        datasets: [
          {
            // label: 'Dataset 1',
            data: [2, 5, 9, 1, 4, 8, 3, 10],
            borderColor: "#008E17",
            backgroundColor: "#008E17",
          },
        ],
      };
  return (
    <div className="chart">
      <Line options={options} data={data} />
    </div>
  );
}
