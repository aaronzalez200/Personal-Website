import styles from "../styles/Project.module.css"

export default function Projects() {
    return (
        <div className={styles.Project}>
            <h1>Projects</h1>
            <div className={styles.Box}>
                <div className={styles.Content}>
                    <h2>Dota 2 Club Website</h2>
                    <img src="WebCap1.PNG"/>
                    <div className={styles.Info}>
                            <a href="https://dota2clubpurdue.netlify.app/" className={styles.LiveSite}>
                                <h3>Live Site</h3>
                                <img src="netlify.png" />
                            </a>
                        <a href="https://github.com/aaronzalez200/Purdue-DotaTeam-Nextjs" className={styles.Repo}>
                            <h3>Github Repo</h3>
                            <img src="github.png" />
                        </a>
                    </div>
                    <div className={styles.Tech}>
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
                    </div>
                </div>
            </div>
            <div className={styles.Box}>
                <div className={styles.Content}>
                    <h2>Netflix Clone Esports</h2>
                    <img src="WebCap2.PNG"/>
                    <div className={styles.Info}>
                            <a href="https://aaron-netflix-clone.netlify.app/" className={styles.LiveSite}>
                                <h3>Live Site</h3>
                                <img src="netlify.png" />
                            </a>
                        <a href="https://github.com/aaronzalez200/netflix-clone" className={styles.Repo}>
                            <h3>Github Repo</h3>
                            <img src="github.png" />
                        </a>
                    </div>
                    <div className={styles.Tech}>
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
                    </div>
                </div>
            </div>
            <div className={styles.Box}>
                <div className={styles.Content}>
                    <h2>Dota 2 Player Scouter</h2>
                    <img src="WebCap3.PNG"/>
                    <div className={styles.Info}>
                            <a href="https://dota2playerscouter.netlify.app/" className={styles.LiveSite}>
                                <h3>Live Site</h3>
                                <img src="netlify.png" />
                            </a>
                        <a href="https://github.com/aaronzalez200/dota2player-scouter-WIP" className={styles.Repo}>
                            <h3>Github Repo</h3>
                            <img src="github.png" />
                        </a>
                    </div>
                    <div className={styles.Tech}>
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
                    </div>
                </div>
            </div>
        </div>
    )
}