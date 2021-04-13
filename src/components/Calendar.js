import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import styles from "./Calendar.css"


const CalendarCustom = ({range, setRange, min, max}) => {
  const [ value, setValue ] = useState(range)
  useEffect(() => {
    setValue(range)
  },[range])
  const onCancel = () => {
    setValue([])
  }

  const onFilter = () => {
    setRange(value)
  }

  return (
    <div className={styles.container}>
      {
      value && min && max &&
        <Calendar
          onChange={setValue}
          value={value}
          selectRange={true}
          formatShortWeekday={(locale, date) => ['S', 'M', 'T', 'W', 'T', 'F', 'S'][date.getDay()]}
          showNeighboringMonth={false}
          minDate={new Date(min)}
          maxDate={new Date(max)}
        />
      }
      <div className={styles.btnContainer}>
        <button className={`${styles.btnCancel} ${styles.btn}`} onClick={onCancel}>
            Cancel
        </button>
        <button className={`${styles.btnFilter} ${styles.btn}`} onClick={onFilter} >
            Filter
        </button>
      </div>
    </div>
  );
}

export default CalendarCustom