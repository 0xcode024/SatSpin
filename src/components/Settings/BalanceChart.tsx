import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts"; // Regular import for non-Next.js projects

const chartConfig = {
  type: "line" as const,
  height: 240,
  series: [
    {
      name: "Sales",
      data: [0, 25, 45, 53, 43, 30, 33, 48, 60, 80, 100], // 9 data points
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
      background: "#303132",
    },
    title: {
      text: "",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#F7931A"],
    stroke: {
      lineCap: "round" as "round",
      curve: "smooth" as "smooth",
    },
    markers: {
      size: 0,
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: ["2015", "", "2016", "", "2017", "", "2018", "", "2019"],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 1,
      xaxis: {
        lines: {
          show: false,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "dark",
    },
  },
};

const BalanceChart = () => {
  return (
    <Card placeholder="" className="hidden bg-bgColor7 md:block">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
        placeholder=""
      >
        <div className="text-xl">Balance Change</div>
      </CardHeader>
      <CardBody className="px-2 pb-0" placeholder="">
        <Chart {...chartConfig} />
      </CardBody>
    </Card>
  );
};

export default BalanceChart;
