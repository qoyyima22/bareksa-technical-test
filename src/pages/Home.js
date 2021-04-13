import React, { useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import Conversion from "../components/Conversion"
import Users from "../components/Users"
import Revenue from "../components/Revenue"
import Calendar from "../components/Calendar"
import Orders from "../components/Orders"
import Loading from "../components/Loading"
import styles from "./Home.css"

const Home = () => {
  const [ data, setData ] = useState({})
  const [ loading, setLoading ] = useState(true) 
  
  useEffect(() => {
    fetch('https://ecdba7fe-ec10-4d90-8d0e-80f8364c7624.mock.pstmn.io/takehometest/frontend/web/dashboard')
    .then(response => response.json())
    .then(data => data.code === 2200 && setData(data.data))
    .catch(err => console.error(err))
    .finally(() => setLoading(false))
  },[])
  
  return (
    <Layout>
      {
        loading ? (<Loading />) : (
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
        )
      }
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
        <div className={`${styles.chartSection} ${styles.chartSectionBottom}`} >
          <Calendar min={min} max={max} range={range} setRange={setRange} />
          <Orders data={revData} />
        </div>
  )
}

export default Home;