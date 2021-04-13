import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import Conversion from "./Conversion.js"
import Users from "./Users.js"
import Revenue from "./Revenue.js"
import styles from "./Home.css"
import Calendar from "./Calendar.js"
import Orders from "./Orders"

const Home = () => {
  const [ data, setData ] = useState({})
  
  useEffect(() => {
    fetch('https://ecdba7fe-ec10-4d90-8d0e-80f8364c7624.mock.pstmn.io/takehometest/frontend/web/dashboard')
    .then(response => response.json())
    .then(data => data.code === 2200 && setData(data.data))
    .catch(err => console.error(err))
  },[])
  
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.chartSection}>
          <Conversion data={data?.orders} />
          <Users data={data?.user_category} />
          <Revenue data={data?.orders} />
        </div>
        {
          data?.orders && (
            <BottomSection data={data?.orders} />
          )
        }
      </div>
    </Layout>
  );
};

const BottomSection = ({data = []}) => {
  const [ masterData, setMasterData ] = useState()
  const [ range, setRange ] = useState();
  const [ revData, setRevData ] = useState([])
  const [ min, setMin ] = useState()
  const [ max, setMax ] = useState()

  useEffect(() => {
    if(data) {
      let temp = [...data].map(el => {
        el.start_date = new Date(el.start_date).valueOf()
        el.due_date = new Date(el.due_date).valueOf()
        return el
      })
      setMasterData(temp)
      setRevData(temp)
      setMin(data[0]?.start_date)
      setMax(data[data.length-1]?.due_date)
      setRange([new Date (data[0]?.start_date), new Date (data[data.length-1]?.due_date)])
    }
  },[])

  useEffect(() => {
    if(range?.[0] && range?.[1]) {
      let min = (range[0].valueOf())
      let max = (range[1].valueOf())
      let temp = [...masterData].filter(el => {
        return (el.start_date >= min && el.start_date <= max) || (el.due_date >= min && el.due_date <= max)
      })
      setRevData(temp)
    }
  },[range])

  return (
        <div className={styles.chartSection} style={{marginTop: "24px"}}>
          <Calendar min={min} max={max} range={range} setRange={setRange} />
          <Orders data={revData} />
        </div>
  )
}

export default Home;