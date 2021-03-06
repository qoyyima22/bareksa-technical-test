import HighchartsReact from 'highcharts-react-official'
import HighCharts from "highcharts"
import React, {useEffect, useState} from 'react'
import styles from "./PieChart.css"
import variablePie from 'highcharts/modules/variable-pie'

variablePie(HighCharts)

const Users = ({data}) => {
    const [pieData, setPieData] = useState([])
    useEffect(() => {
        if(data) {
            let res = []
            Object.keys(data).forEach((el) => {
                res.push({
                    name: el,
                    y: Number(data[el]),
                    z: Number(data[el])
                })
            })
            setPieData(res)
        }
    },[data])

    const Pie = () => <HighchartsReact
    highcarts={HighCharts}
    options= {{
        chart: {
            type: "variablepie"
        },
        title: {
            text: ""
        },
        tooltip: {
            headerFormat: "",
            pointFormat: '{point.y}',
            followPointer: false
        },
        series: [{data: pieData}],
        plotOptions: {
            variablepie: {
             colors: [
               '#5C8F94', 
               '#EBA45E', 
               '#725E9C', 
               '#E4EAEB',
             ],
             dataLabels: {
                enabled: false
            },
             showInLegend: true
            },
        },
        credits: {
            enabled: false
        },
        legend: {
            itemStyle: {
                color: "#9c9c9c",
                fontSize: "12px",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "400"
            }
        }
    }} />

    return (
        <div className={styles.container} style={{flex: 336}}>
            <div className={styles.titleContainer}>
                <div className={styles.titleText}>Users</div>
                <button className={styles.titleButton}>&#8230;</button>
            </div>
            <div>
                <Pie />
            </div>
        </div>
    )
}

export default Users