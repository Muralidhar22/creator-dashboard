import { Line } from "react-chartjs-2";
import { Chart as ChartJs, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, defaults } from "chart.js";
import { Lato } from 'next/font/google';
import { useEffect, useState } from "react";

const lato = Lato({ subsets: ['latin'], weight: ["100","300","400","700","900"] })

defaults.font.family = "lato"

ChartJs.register(
    Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement
)

const data = {
    labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
    datasets: [
        { 
         label: "User",
         data: [0, 59, 75, 20, 20, 55, 40],
         borderWidth: 3,
         borderColor: '#9BDD7C',
         pointRadius: 0,
         lineTension: 0.4,
       },
       {
          label: "Guest",
          data: [20, 15, 60, 60, 65, 30, 70],
          borderWidth: 3,
          borderColor: '#E9A0A0',
          pointRadius: 0,
          lineTension: 0.4,
        },
    ]
}

const options =  {
    responsive: true,
    aspectRatio: 4,
    scales: {
        x: {
          grid: {
            display: false, // Set display to false to remove vertical grid lines
          },
        },
    },
    plugins: {
        legend: {
          position: 'top',
          align: 'end',
          labels: {
            usePointStyle: true,
            borderColor: "transparent",
            font: {
                family: "Lato", // Set the font family
                size: 16, // Set the font size
                weight: "bold",
            }
          }
        },
      },
}

const Chart = () => {
   const [chartOptions, setChartOptions] = useState(options)
   
   useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const newAspectRatio = screenWidth < 768 ? 1 : 4; // Adjust aspect ratio based on screen width
      setChartOptions((prevOptions) => ({
        ...prevOptions,
        aspectRatio: newAspectRatio,
      }));
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
   },[])
   
  
    return (
        <div style={{ height: "400px" }} className={`bg-white p-10 rounded-xl ${lato.className}`}>
            <h2 className="font-bold text-lg">Activities</h2>
            {data && <Line data={data} className="max-w-full" options={chartOptions} />}
        </div>
    )
}

export default Chart;