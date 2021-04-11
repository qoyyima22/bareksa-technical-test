import React from 'react'
import styles from "./Header.css"
import bareksaLogo from "src/assets/bareksa-logo-tiny.png"
import { BellOutlined, SettingOutlined, SearchOutlined } from "@ant-design/icons"

const Header = () => {
    const onSubmit = (e) => {
        e.preventDefault();
        alert(`Mencari ${e.target[0].value}`)
    }
    return (
        <div className={styles.container}>
            <div className={styles.subcontainer}>
                <div>
                    <img className={styles.logo} src={bareksaLogo} />
                </div>
                <div className={styles.userCard}>
                    <div className={styles.userIcon}>
                        RH
                    </div>
                    <div className={styles.userInfo}>
                        <div className={styles.name}>
                            Reinhart H.
                        </div>
                        <div className={styles.location}>
                            Kemang, Jakarta
                        </div>
                    </div>
                    <div className={styles.icon}>
                        &#x2304;
                    </div>
                </div>
            </div>
            <div className={styles.subcontainer}>
                <div>
                    <form className={styles.searchForm} onSubmit={onSubmit}>
                        <label htmlFor="search">
                            <input className={styles.searchInput} placeholder="Search text" name="search" />
                            <button type="submit" className={styles.searchButton}><span className={styles.searchIcon}><SearchOutlined /></span></button>
                        </label>
                    </form>
                </div>
                <div className={styles.iconRightContainer}>
                    <button type="submit" className={styles.searchButton}><span className={styles.iconRight}><BellOutlined /></span></button>
                    <div className={styles.badge} />
                </div>
                <div className={styles.iconRightContainer}>
                    <button type="submit" className={styles.searchButton}><span className={styles.iconRight}><SettingOutlined /></span></button>
                </div>
            </div>
        </div>
    )
}

export default Header
