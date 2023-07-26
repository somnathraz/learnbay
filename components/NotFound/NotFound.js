import React from 'react'
import Image from 'next/image'
import styles from "./NotFound.module.css"

function NotFound() {
  return (
    <section className={styles.mainSection}>
      <div className={styles.innerCont}>
        <h1>404</h1>
        <p>Oops! looks like a broken link.</p>
        <div className={styles.image}>
        <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/DISCONNECT.webp"
            width="1987"
            height="127"
            layout="intrinsic"
            alt="data science course"
          />
          </div>
          <div className={styles.Button}>
        <a href="/">
          <button>
            Click Here to Recoonnect
          </button>
        </a>
      </div>
      </div>
    </section>
  )
}

export default NotFound