import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
    
  } from 'chart.js'
  import { Doughnut } from "react-chartjs-2";
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  )
  const DoughnutB = ({data,options})=>{
    return(
        <div className="test">
            <Doughnut
                data={data}
                options={options}
            ></Doughnut>
        </div>
    )
  }

  export default DoughnutB;