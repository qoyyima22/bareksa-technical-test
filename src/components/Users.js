import HighchartsReact from 'highcharts-react-official'
import HighCharts from "highcharts/highstock"
import React, {useEffect, useState} from 'react'
import styles from "./Users.css"
import variablePie from 'highcharts/modules/variable-pie'

variablePie(HighCharts)

const Users = ({data}) => {
    const [pieData, setPieData] = useState([])
    useEffect(() => {
        // let temp = {}
        // if(data?.length) {
        //     for(let i = 0; i < data.length; i++) {
        //         if(temp[data[i].conversion_item]) {
        //             temp[data[i].conversion_item] += Number(data[i].conversion_revenue) 
        //         } else {
        //             temp[data[i].conversion_item] = Number(data[i].conversion_revenue)
        //         }
        //     }
        // }
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

    console.log(pieData)

    const Pie = () => <HighchartsReact
    highcarts={HighCharts}
    // constructorType="chart"
    options= {{
        chart: {
            type: "variablepie"
        },
        title: "Tes",
        tooltip: {
            pointFormat: '{point.y}'
        },
        series: [{data: pieData}],
        plotOptions: {
            pie: {
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