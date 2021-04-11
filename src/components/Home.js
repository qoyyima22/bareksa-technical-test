import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import Conversion from "./Conversion.js"
import Users from "./Users.js"
import styles from "./Home.css"

const Home = () => {
  const [ data, setData ] = useState({})

  useEffect(() => {
    fetch('https://ecdba7fe-ec10-4d90-8d0e-80f8364c7624.mock.pstmn.io/takehometest/frontend/web/dashboard')
    .then(response => response.json())
    .then(data => data.code === 2200 && setData(data.data))
    .catch(err => console.error(err))
  },[])
  console.log(data, "Huhauauh")
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.chartSection}>
          <Conversion data={data?.orders} />
          {/* <Users data={data?.user_category} /> */}
        </div>
      </div>
    </Layout>
  );
};

export default Home;