import React from 'react'
import styles from "./Loading.css"

const Loading = () => {
    return (
        <div className={styles.cont}>
            <div className={styles.ldsRing}><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loading