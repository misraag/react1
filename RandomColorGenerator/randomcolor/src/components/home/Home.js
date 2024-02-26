import React from 'react'
import styles from './Home.module.css'

function Home () {

    function handleRandomHexGenerator () {

    }

    function handleRandomRGBGenerator () {

    }

    function handleChangeColor () {

    }


    return (
        <div>
            <nav className={styles.navbar}>
                <button onClick={handleRandomHexGenerator} className={styles.button}>Generate HEX</button>
                <button onClick={handleRandomRGBGenerator} className={styles.button}>Generate RGB</button>
                <button onClick={handleChangeColor} className={styles.button}>Change Color</button>
            </nav>
            <div className={styles.division}></div>
        </div>
    )

}

export default Home;