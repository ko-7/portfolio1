import Layout from '../components/Layout'
// import styles from '../styles/Home.module.css'
import Introduce from '../components/Introduce'
import HomeWelcome from '../components/HomeWelcome'
import Work from '../components/Work'
import Contact from '../components/Contact'

export default function Home() {
  return (<div>
    <HomeWelcome />
    <Layout>
      {/* <div className={styles.container}> */}
      <Work />
      <Introduce />
      <Contact />
    </Layout>
  </div>)
}