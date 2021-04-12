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
  const [value, onChange] = useState(new Date());

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
        <div className={styles.chartSection} style={{marginTop: "24px"}}>
          <Calendar value={value} onChange={onChange} />
          <Orders data={data?.orders} value={value} />
        </div>
      </div>
    </Layout>
  );
};

export default Home;