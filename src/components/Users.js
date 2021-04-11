import HighchartsReact from 'highcharts-react-official'
import HighCharts from "highcharts"
import React, {useEffect, useState} from 'react'
import styles from "./Users.css"
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
        title: "Tes",
        tooltip: {
            headerFormat: "",
            pointFormat: '{point.y}'
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
        }
    }} />

    return (
        <div className={styles.container}>
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