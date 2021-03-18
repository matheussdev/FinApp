import { useEffect, useState, useContext } from "react";
import { Bar } from "react-chartjs-2";
import { TransactionsContext } from "../hooks/useTransactions";
import "./style.css";
let novoarray: string[] = [];
let novoarrayDados: number[] = [];
for(let k = 0; k < 30;k++){
  novoarrayDados[k]=0
}

for (let i = 1; i <= 29; i++) {
  novoarray = [
    ...novoarray,
    String(new Date(new Date().getTime() - 24 * i * 3600000).getDate()),
  ];
}
export function SpendDayChart() {
  const {transactions} = useContext(TransactionsContext);

  const [dateNow, setDateNow] = useState(new Date().getTime());
  const [arrayDeDatas, setarrayDeDatas] = useState<string[]>([
    String(new Date().getDate())
  ]);
  let [arrayDeDados, setarrayDeDados] = useState<number[]>(novoarrayDados)

  function gerarDateArray() {
    novoarray=[];
    setarrayDeDatas([String(new Date().getDate())]);
    for (let i = 1; i <= 29; i++) {
      novoarray = [
        ...novoarray,
        String(new Date(dateNow - 24 * i * 3600000).getDate()),
      ];
    }
    setarrayDeDatas([...arrayDeDatas, ...novoarray].reverse());
    gerarGastosArray()
    return arrayDeDatas
  }
  console.log(arrayDeDatas)

  function gerarGastosArray() {
    console.log('novo', novoarray)
    novoarrayDados=[0,1]
    arrayDeDados=[]
    setarrayDeDados([])
    console.log("kkk : "+novoarrayDados, arrayDeDados)
    console.log("ad: "+ arrayDeDatas);
    for(let k = 0; k < 30;k++){
      novoarrayDados[k]=0
    }
    for(let j of transactions ){
      console.log(j);
      for (let i in novoarray) {
        if (String(new Date(j.createdAt).getDate()) === novoarray[i]){
          console.log(String(new Date(j.createdAt).getDate()) +" = "+ novoarray[i]);
          if(j.type==="withdraw"){
            novoarrayDados[i] += j.amount
            console.log("nvd: "+ novoarrayDados);
          }
        }else{
          novoarrayDados[i] += 0
        }
      }
    }
    setarrayDeDados([...arrayDeDados, ...novoarrayDados]);
    
  }
  console.log("1:",arrayDeDados.reverse());
 
    window.onload = () =>{
      gerarGastosArray()
      gerarDateArray()
    }
    




 

  const configChart = {
    data: {
      labels: arrayDeDatas,
      datasets: [
        {
          label: "R$ gasto no dia",
          data: arrayDeDados,
          backgroundColor: [
            "red",
            "red",
            "red",
            "red",
            "red",
            "red",
            "red",
            "red",
            "red",
            "red",
            "red",
            "red",
            "red",
            "red",
            "red",
            "red",
            "red",
            "red",
            "red",
            "red",
            "red",
            "red",
            "red",
            "red",
            "red",
            "red",
            "red",
            "red",
            "red",
            "red",
            "red",
          ],
          minBarLength: 2,
        },
      ],
    },
    options: {
      legend: {
        position: "right",
        display: false,
      },
      scales: {
        yAxes: [
          {
            display: false,
            stacked: true,
            gridLines: {
              display: false,
            },
          },
        ],
        xAxes: [
          {
            display: true,
            stacked: true,
            gridLines: {
              display: false,
            },
          },
        ],
      },
    },
  };

  return (
    <div className="chart" onClick={gerarGastosArray}>
      <Bar data={configChart.data} options={configChart.options} />
    </div>
  );
}
