import { useState, useEffect } from "react";
import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { dummyDataSets } from "./assets/data"; 

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

const timeOptions = ["1 Day", "1 Week", "1 Month", "1 Year"];

export default function Home() {
  const [timeFilter, setTimeFilter] = useState("1 Year");
  const [data, setData] = useState(dummyDataSets["1 Year"]);

  useEffect(() => {
    setTimeout(() => {
      setData(dummyDataSets[timeFilter]);
    }, 500); 
  }, [timeFilter]);

  return (
    <div className="p-8 bg-gradient-to-b from-indigo-50 to-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold tracking-tight text-gray-800">
          CRM Dashboard
        </h1>
        <div>
          <select
            value={timeFilter}
            onChange={(e) => setTimeFilter(e.target.value)}
            className="p-2 bg-white border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
          >
            {timeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard title="New Leads" value={data.pieData.datasets[0].data[0]} />
        <StatCard
          title="Opportunities"
          value={data.pieData.datasets[0].data[1]}
        />
        <StatCard
          title="Sales Closed"
          value={data.pieData.datasets[0].data[2]}
        />
        <StatCard
          title="Revenue"
          value={`$${
            data.pieData.datasets[0].data.reduce((a, b) => a + b, 0) * 100
          }`}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Sales Over Time</h2>
          <Line data={data.lineData} />
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">
            Opportunities Breakdown
          </h2>
          <Pie data={data.pieData} />
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg text-center">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}
