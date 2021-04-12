import React, { useState } from 'react';
import Calendar from 'react-calendar';
import styles from "./Calendar.css"


const CalendarCustom = ({value, onChange}) => {

  return (
    <div className={styles.container}>
      <Calendar
        onChange={onChange}
        value={value}
        selectRange={true}
        formatShortWeekday={(locale, date) => ['S', 'M', 'T', 'W', 'T', 'F', 'S'][date.getDay()]}
        showNeighboringMonth={false}
      />
      <div className={styles.btnContainer}>
        <button className={`${styles.btnCancel} ${styles.btn}`}>
            Cancel
        </button>
        <button className={`${styles.btnFilter} ${styles.btn}`}>
            Filter
        </button>
      </div>
    </div>
  );
}

export default CalendarCustom