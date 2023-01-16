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
  import { Bar, Line, Bubble, Pie } from "react-chartjs-2";
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
const LineG = ({data,options})=>{
    return(
        <div>
            <Line 
                data={data}
                options = {options}  
              ></Line>
        </div>
    )
  }

  export default LineG;