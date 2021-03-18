import { Doughnut } from "react-chartjs-2";
import "./style.css";

interface SpendChartProps{
  datas:{
    withdraws:number;
    deposits:number;
    total:number;
  }
}

export function SpendChart({datas}: SpendChartProps) {
  const chartConfig = {
    data: {
      labels: ["Ganhos", "Gastos", "contas"],
      datasets: [
        {
          // fazer req da api
          data: [datas.deposits, datas.withdraws, 0],
          backgroundColor: [
            "rgb(47, 255, 0, 0.6)",
            "rgb(255,0,0,0.7)",
            "rgb(109, 8, 62,0.8)",
          ],
          borderWidth: 2,
          borderColor: [
            "rgb(47, 255, 0, 0.9)",
            "rgb(255,0,0,0.8)",
            "rgb(109, 8, 62)",
          ],
        },
      ],
    },
    options: {
      legend:{
        position:"right",
      },
    },
  };
  return (
    <div className="chartone">
      <Doughnut data={chartConfig.data} options={chartConfig.options} />
    </div>
  );
}
