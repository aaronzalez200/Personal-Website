import Link from "next/link";
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.Navbar}>
            <img src="/TreeLogo2022.png" height="40" />
            <div className={styles.work}>
                Github:
                <a href="https://github.com/aaronzalez200">
                    <img src="/github.png"/>
                </a>
                Linkedin:
                <a href="https://www.linkedin.com/in/aaron-gonzalez-675452229/">
                    <img src="/linkedin.png"/>
                </a>
            </div>
            <div className={styles.link}>
                <Link href="/" >
                    <a className={styles.navigate}>Home</a>
                </Link>
                <Link href="/Resume" >
                    <a className={styles.navigate}>Resume</a>
                </Link>
                <Link href="/Projects" >
                    <a className={styles.navigate}>Projects</a>
                </Link>
            </div>
        </div>
    )
}

export default Navbar