import Head from 'next/head'
import Link from "next/link"
import styles from '../styles/Home.module.css'
import Intro from "../components/Intro"
import Tech from "../components/tech"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Aaron's Portfolio </title>
      </Head>
      <Intro />
      <Tech />
    </div>
  )
}
