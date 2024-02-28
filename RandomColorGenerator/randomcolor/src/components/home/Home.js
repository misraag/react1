import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'

function Home () {

    const [colorType, setColorType] = useState('HEX');
    const [color, setColor] = useState('#000000');

    function generateRandomNumber (length) {
        return Math.floor(Math.random()*length);
    }


    function handleRandomHexGenerator () {
        console.log('Handling random hex generator');
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

        let hexColor = '#';

        for (let i = 0; i < 6; i++) {
            hexColor += hex[generateRandomNumber(hex.length)];
        }
        console.log(color);
        setColor(hexColor);

    }

    function handleRandomRGBGenerator () {
        console.log("handling rgb color generator")
        
        const r = generateRandomNumber(256);
        const g = generateRandomNumber(256);
        const b = generateRandomNumber(256);

        setColor(`rgb(${r},${g},${b})`);

    }

    useEffect( () => {

        if(colorType === 'HEX') handleRandomHexGenerator();
        else handleRandomRGBGenerator();

    }, [colorType]);


    return (
        <div>
            <nav className={styles.navbar}>
                <button onClick={() => setColorType('HEX')} className={styles.button}>Create HEX</button>
                <button onClick={() => setColorType('RGB')} className={styles.button}>Create RGB</button>
                <button onClick={ colorType === 'HEX' ? handleRandomHexGenerator : handleRandomRGBGenerator} className={styles.button}>Generate Random Color</button>
            </nav>
            <div style={{backgroundColor: color}} className={styles.division}>
                <h1>Hello</h1>
                <h2>dfadsfs</h2>
            </div>
        </div>
    )

}

export default Home;