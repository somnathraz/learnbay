import React from 'react'
import styles from "./CityText.module.css";


const CityText = ({
  CityText,
  CityTextB,
  CityTextLB,
  CityTextL,
}) => {
  return (
    <section className={styles.CityText}>
        <p className={styles.CityTextP}><b>{CityTextB}</b>{CityText}</p>
        <p className={styles.CityTextP}><b>{CityTextLB}</b>{CityTextL}</p>
    </section>
  )
}

export default CityText
