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
    <div className="flex h-[350px] w-[350px] justify-center pt-[60px] sm:h-[380px] sm:w-[380px]">
      <div className="absolute left-[-10px] top-[18px] flex h-[460px] w-[460px] sm:left-[-10px] sm:top-[18px]">
        <svg
          aria-hidden="true"
          className="h-[370px] w-[370px] animate-spin sm:h-[400px] sm:w-[400px]"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            className="text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="283"
            strokeDashoffset="75"
            strokeLinecap="round"
            className="text-[#5A5A5A]"
          />
        </svg>
      </div>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DonutChart;
