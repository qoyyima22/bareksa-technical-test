import HighchartsReact from 'highcharts-react-official'
import HighCharts from "highcharts"
import React, {useEffect, useState} from 'react'
import styles from "./Conversion.css"

const Conversion = ({data}) => {
    const [pieData, setPieData] = useState([])
    useEffect(() => {
        let temp = {}
        if(data?.length) {
            for(let i = 0; i < data.length; i++) {
                if(temp[data[i].conversion_item]) {
                    temp[data[i].conversion_item] += Number(data[i].conversion_revenue) 
                } else {
                    temp[data[i].conversion_item] = Number(data[i].conversion_revenue)
                }
            }
        }
        let res = []
        Object.keys(temp).forEach((el) => {
            res.push({
                name: el,
                y: temp[el]
            })
        })
        setPieData(res)
    },[data])

    const Pie = () => <HighchartsReact
    highcarts={HighCharts}
    constructorType="chart"
    options= {{
        chart: {
            type: "pie"
        },
        title: "Tes",
        tooltip: {
            headerFormat:"",
            pointFormat: '$ {point.y}'
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
        credits: {
            enabled: false
        }
    }} />

    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <div className={styles.titleText}>Conversion</div>
                <button className={styles.titleButton}>&#8230;</button>
            </div>
            <div>
                <Pie />
            </div>
        </div>
    )
}

export default Conversion