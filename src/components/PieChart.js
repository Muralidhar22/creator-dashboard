import {
    Chart as ChartJs,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJs.register(
    ArcElement,
    Tooltip,
    Legend
)

const options = {
    aspectRatio: 2.25,
    plugins: {
        legend: {
          position: 'right',
          align: 'center',
          labels: {
            generateLabels: (chart) => {
                const data = chart.data || {};
                const labels = data.labels || [];
                const datasets = data.datasets || [];
                let total = 0;
      
                datasets.forEach((dataset) => {
                  dataset.data.forEach((value) => {
                    total += value;
                  });
                });
      
                return labels.map((label, index) => {
                  const dataset = datasets[0]; // Assuming a single dataset
                  const value = dataset.data[index];
                  const percentage = ((value / total) * 100).toFixed(2);
      
                  return {
                    text: `${label} (${percentage}%)`,
                    fillStyle: dataset.backgroundColor[index],
                    borderColor: "none"
                  };
                });
              },
            usePointStyle: true,
            font: {
                family: "Lato", // Set the font family
                size: 16, // Set the font size
                weight: "bold",
            }
          }
        },
      },
}

const data = {
    labels: ['Basic Tees', 'Custom Short pants', 'Super Hoodies'],
    datasets: [
        {
            data: [55, 31, 14],
            backgroundColor: ["#98D89E","#F6DC7D", "#EE8484"],
            borderColor: "transparent"
        }
    ]
}

const PieChart = () => {
    return (
        <div className="bg-white p-8 rounded-xl w-full">
          <h2 className="text-lg font-bold mb-2">Top products</h2>
            <Pie
                data={data}
                options={options}
                className="block"
            ></Pie>
        </div>
    )
}

export default PieChart;