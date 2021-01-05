import Layout from '../components/Layout'
// import styles from '../styles/Home.module.css'
import Qiita from '../components/Qiita'

export default function Home() {
  return (<div>
    <Layout>
      {/* <div className={styles.container}> */}
      <Qiita />
    </Layout>
  </div>)
}