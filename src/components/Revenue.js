import React, {useEffect, useState} from 'react'
import Highcharts from "highcharts/highstock"
import HighchartsReact from 'highcharts-react-official'
import styles from "./PieChart.css"
import stylesRev from "./Revenue.css"


const Revenue = ({data}) => {
    const [areaData, setAreaData] = useState([])
    const [rev, setRev] = useState({
        total: 0,
        changes: 100
    })
    useEffect(() => {
        const days = ['Mon', "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        let temp = {}
        if(data?.length) {
            for(let i = 0; i < data.length; i++) {
                let date = new Date(data[i].start_date)
                console.log({date})
                let key = `${date.getUTCDate()}-${date.getUTCMonth()}-${date.getUTCFullYear()}`
                if(temp[key]) {
                    temp[key].value += Number(data[i].conversion_revenue) 
                } else {
                    temp[key] = {
                        day: days[date.getDay()],
                        date,
                        value: Number(data[i].conversion_revenue)
                    }
                }
            }
        }
        let res = []
        let total = 0
        Object.keys(temp).forEach((el) => {
            total+=temp[el].value
            res.push([
                temp[el].date.getTime(),
                temp[el].value,
                // x: temp[el].day,
            ])
        })
        console.log({res,total}, "ini res")
        setAreaData(res)
        setRev({
            ...rev,
            total,
        })
    },[data])

    const axisStyle = {
        color: "#9c9c9c",
        fontSize: "12px",
        fontFamily: "Montserrat, sans-serif",
        fontWeight: "400"
    }

    const options = {
        chart: {
            // events: {
            //     redraw: function(e) {
            //         console.log({e,this: this.x}, "HUUHUAHUFHUQHUHFUQHUH")
            //     }
            // },
            height: "240px"
        },
        rangeSelector: {
            selected: 1,
            buttons: [],
            inputStyle: {
                color: "#333",
                fontSize: "14px",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "600"
            }
        },
        series: [
          {
              type: 'areaspline',
              data: areaData,
              lineColor: "#789764",
              fillColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0, "rgba(120, 151, 100, 0.65)"],
                    [1, "#fff"]
                ],
                borderColor: "#789764",
                tooltip: {
                    valueDecimals: 2,
                }
            },
          }
        ],
        yAxis: {
            opposite: false,
            labels: {
                formatter: function () {
                    return `$${this.value/1000}k`
                },
                style: axisStyle
            },
            gridLineWidth: 0,
        },
        xAxis: {
            labels: {
                style: axisStyle
            },
            gridLineWidth: 1,
        },
        navigator: {
            enabled: false
        },
        scrollbar: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        tooltip: {
            headerFormat: ""
        }
      };
      
      const Area = () => (
        <div>
          <HighchartsReact
            highcharts={Highcharts}
            constructorType={'stockChart'}
            options={options}
          />
        </div>
      );

    console.log(areaData)
    return (
        <div className={`${styles.container} ${stylesRev.container}`}>
            <div className={styles.titleContainer}>
                <div className={styles.titleText}>Revenue</div>
            </div>
            <div className={stylesRev.areaContainer}>
                <Area />
            </div>
            <div>
                <div className={stylesRev.text1}>
                    Total Revenue
                </div>
                <div className={stylesRev.text2}>
                    ${rev.total}
                </div>
                <div className={stylesRev.text3}>
                    &#8593; {rev.changes}%
                </div>
            </div>
        </div>
    )
}

export default Revenue