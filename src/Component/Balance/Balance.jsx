import { LuMoreVertical } from "react-icons/lu";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend, Ticks} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
import './Balance.css'

const Balance = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        data: [2, 4, 10, 6, 8, 10, 5, 10, 15, 12, 8, 10],
        backgroundColor: 'rgba(75, 0, 130, 0.8)',
      },
      {
        data: [4, 6, 15, 8, 10, 10, 10, 10, 20, 10, 12, 12],
        backgroundColor:'rgba(147, 112, 219, 0.6)',
      },
      {
        data: [6, 8, 15, 10, 12, 5, 8, 15, 10, 15, 15, 10],
        backgroundColor: 'rgba(218, 112, 214, 0.4)',
        borderRadius:4
      },
    ],
  };
  const options = {
    plugins: {
      title: {
        display: false,
        text: 'Monthly Data',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
      legend: {
        display:false,
      },
    },
    responsive: true,
    maintainAspectRation:false,
    scales: {
      x: {
        stacked: true,
        barPercentage:12,
        categoryPercentage:12,

        grid:{
          display: false,
          drawborder: false,
        }
      },
      y: {
        stacked: true,

        ticks:{
          display:false,
        }
      }

    },
    layout:{
      padding:{
        top:20,
        left:20
      }
    }
  };

return (
    <div className="Main-grid grid-common1 c5">
      <div className="title">
        <h4>Balance sepanjang waktu</h4>
        <LuMoreVertical className="icons" />
      </div>
      <div className="chart">
      <div>
              <div id="chart">
              <Bar data={data} options={options} />;
              </div>
              <div id="html-dist"></div>
            </div>

      </div>
    </div>
  );
};

export default Balance;
