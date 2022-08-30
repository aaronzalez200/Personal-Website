import React from 'react'
import styles from '../styles/Intro.module.css'

const Intro = () => {
  return (
    <div className={styles.Home}>
      <div className={styles.Box}>
        <div className={styles.Content}>
          <h1 className={styles.Title}>
          &lt;Frontend Developer/&gt;
          </h1>
          <div className={styles.Right}>
            <img src="/TreeLogo2022.png"/>
            <p>Aaron Gonzalez</p>
          </div>
        </div>
      </div>
      <img src="/background.jpg" width="100%" />
    </div>
  )
}

export default Intro