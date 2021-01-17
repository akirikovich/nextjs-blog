import styles from '../styles/About.module.css'
import Head from 'next/head'
import Layout from '../components/layout'

export default function About() {
    return(
        <Layout>
            <Head>
                <title>About</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.title}>About</div>
        </Layout>
        
    )
}