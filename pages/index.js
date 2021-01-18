import Layout from '../components/Layout'
// import styles from '../styles/Home.module.css'
import Introduce from '../components/Introduce'
import HomeWelcome from '../components/HomeWelcome'
import Work from '../components/Work'
import Contact from '../components/Contact'
import Box from '@material-ui/core/Box'


export default function Home() {
  return (<Box>
    <HomeWelcome />
    <Layout>
      {/* <div className={styles.container}> */}
      <Work />
      <Introduce />
      <Contact />
    </Layout>
  </Box>)
}