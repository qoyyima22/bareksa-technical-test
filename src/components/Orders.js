import React, { useEffect } from 'react'
import styles from "./Orders.css"

const Orders = ({data, value}) => {
    return (
        <div className={styles.container} >
            <div className={styles.titleContainer}>
                <div className={styles.titleText}>Orders</div>
            </div>
            <div className={styles.tableContainer}>
                {/* {
                    JSON.stringify(data)
                } */}
                <table className={styles.table}>
                    <thead className={styles.thead}>
                        <tr>
                            <th>Order{'\n'}Number</th>
                            <th>Status</th>
                            <th>Operator</th>
                            <th>Location</th>
                            <th>Start Date</th>
                            <th>Due Date</th>
                        </tr>
                    </thead>
                    <tbody className={styles.tbody}>
                        {
                            data?.map((el,i) => (
                                <tr key={i}>
                                    <td>
                                        #{el.order_id.split("-")[1]}
                                    </td>
                                    <td>
                                        <div className={`${styles[el.status]} ${styles.badge}`}>
                                            {el.status}
                                        </div>
                                    </td>
                                    <td>
                                        {el.full_name}
                                    </td>
                                    <td>
                                        {el.location}
                                    </td>
                                    <td>
                                        {timeConverter(el.start_date)}
                                    </td>
                                    <td>
                                        {timeConverter(el.due_date)}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Orders


function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp);
    var months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var time = date + '/' + month + '/' + year + ' ' + (hour.toString().length === 1 ? `0${hour}` : hour) + ':' + (min.toString().length === 1 ? `0${min}` : min);
    return time;
  }