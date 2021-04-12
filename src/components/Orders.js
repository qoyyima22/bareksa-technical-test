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
                            <th>Order Number</th>
                            <th>Status</th>
                            <th>Operator</th>
                            <th>Location</th>
                            <th>Start Date</th>
                            <th>Due Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((el,i) => (
                                <tr>
                                    <td>
                                        #{el.order_id.split("-")[1]}
                                    </td>
                                    <td>
                                        {el.status}
                                    </td>
                                    <td>
                                        {el.full_name}
                                    </td>
                                    <td>
                                        {el.location}
                                    </td>
                                    <td>
                                        {el.start_date}
                                    </td>
                                    <td>
                                        {el.due_date}
                                    </td>
                                </tr>
                            ))
                        }
                        <tr>
                            <td>January</td>
                            <td>$100</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Orders