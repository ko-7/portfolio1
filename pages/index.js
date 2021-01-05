import Layout from '../components/Layout'
// import styles from '../styles/Home.module.css'
import Introduce from '../components/Introduce'
import HomeWelcome from '../components/HomeWelcome'
import Work from '../components/Work'

export default function Home() {
  return (<div>
    <div>
      <HomeWelcome />
    </div>
    <Layout>
      {/* <div className={styles.container}> */}
      <Work />
      <Introduce />
    </Layout>
  </div>)
}