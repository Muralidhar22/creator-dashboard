import {
    Chart as ChartJs,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";
import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";

ChartJs.register(
    ArcElement,
    Tooltip,
    Legend
)

const getPosition = () => {
  let newAspectRatio = 1;
  let position = "right";
  let align = "center";
  if(typeof window !== "undefined") {
    const screenWidth = window.innerWidth;
      
      if(screenWidth < 768 && screenWidth > 450) {
        newAspectRatio = 3
        position = "bottom"
      } else if (screenWidth < 450) {
        newAspectRatio = 1
        position = "bottom"
      } else if (screenWidth > 768) {
        newAspectRatio = 2.25
        position = "right"
      }
    return {
      newAspectRatio, position, align
    }
  }
  return {
      newAspectRatio, position, align
    }
}

const options = {
    aspectRatio: getPosition().newAspectRatio,
    responsive: true,
    plugins: {
        legend: {
          position: getPosition().position,
          align: getPosition().align,
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
                size: 12, // Set the font size
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
    const [chartOptions, setChartOptions] = useState(options)
    
    useEffect(() => {
      const handleResize = () => {
      const screenWidth = window.innerWidth;
      let newAspectRatio, position, align;
      align = "center"
      
      if(screenWidth < 768 && screenWidth > 450) {
        newAspectRatio = 3
        position = "bottom"
      } else if (screenWidth < 450) {
        newAspectRatio = 1
        position = "bottom"
      } else if (screenWidth > 768) {
        newAspectRatio = 2.25
        position = "right"
      }
      
      setChartOptions((prevOptions) => ({
        ...prevOptions,
        aspectRatio: newAspectRatio,
        plugins: {
          ...prevOptions.plugins,
          legend: {
            position,
            align,
            ...prevOptions.plugins.legend
          }
        }
      }));
      
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
    },[])
  
    return (
        <div className="bg-white p-8 pb-16 rounded-xl w-full">
          <h2 className="text-lg font-bold mb-2">Top products</h2>
            <Pie
                data={data}
                options={chartOptions}
                className="block"
            ></Pie>
        </div>
    )
}

export default PieChart;