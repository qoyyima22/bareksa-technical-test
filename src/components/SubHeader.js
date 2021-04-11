import React from 'react'
import styles from "./SubHeader.css"

const SubHeader = () => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric'
    });
    return (
        <div className={styles.container}>
            <div className={styles.date}>
                {formattedDate}
            </div>
        </div>
    )
}

export default SubHeader