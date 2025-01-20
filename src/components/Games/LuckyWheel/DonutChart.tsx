import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart: React.FC = () => {
  // Define the data type for Chart.js
  const data: ChartData<"doughnut", number[], string> = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "chart",
        data: [50, 20, 9, 11, 5, 3, 2],
        backgroundColor: [
          "#8D540F", // Tailwind Red
          "#B68C59", // Tailwind Blue
          "#D1CEC8", // Tailwind Yellow
          "#C06900", // Tailwind Green
          "#7E4501", // Tailwind Purple
          "#9F8667", // Tailwind Orange
          "#A34100", // Tailwind Orange
        ],
        hoverOffset: 2,
        borderWidth: 0,
        // // borderColor: "transparent",
        borderRadius: 3,
        spacing: 6,
        // offset: 0,
      },
    ],
  };

  // Define the options type for Chart.js
  const options: ChartOptions<"doughnut"> = {
    plugins: {
      legend: {
        display: false,
      },
    },
    aspectRatio: 1,
    cutout: "50%", // Doughnut's cutout size
    animation: {
      animateRotate: true,
    },
    rotation: 90,
  };

  return (
    <div className="relative h-[380px] w-[380px]">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DonutChart;
