import React from 'react'
import styles from '../styles/Tech.module.css'

const Tech = () => {
  return (
    <div className={styles.Tech}>
        <div className={styles.Icons}>
            <h1>About</h1>
            <p className={styles.About}>
                Recently graduated this May from Purdue University in West Lafayette with a degree
                in Electrical Engineering Technology. I enjoy developing websites and have experience 
                with embedded systems from Purdue.
                While at Purdue I was the President of the Dota 2 Club  for 3 years and helped the organization
                join as one of Purdue's Official Esports titles.
            </p>
            <h1>Technologies</h1>
            <div className={styles.Photos}>
                <div className={styles.TechInfo}>
                    <img src="HTML.png" height="90"/>
                </div>
                <div className={styles.TechInfo}>
                    <img src="css.png" height="120"/>
                </div>
                <div className={styles.TechInfo}>
                    <img  src="javascript.png" height="110"/>
                </div>
                <div className={styles.TechInfo}>
                    <img src="react.png" height="85"/>
                </div>
                <div className={styles.TechInfo}>
                    <img src="nextjs.png" height="100"/> 
                </div>
                <div className={styles.TechInfo}>
                     <img src="C.png" height="100"/>
                </div>
                <p>HTML</p>
                <p>CSS</p>
                <p>Javascript</p>
                <p>React</p>
                <p>Next.js</p>
                <p>C</p>
            </div>
        <br></br>
        <br></br>
        <br></br>
        </div>
    </div>
  )
}

export default Tech