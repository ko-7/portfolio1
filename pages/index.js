import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import Button from '@material-ui/core/Button';
import IntroduceUpper from '../components/IntroduceUpper'

export default function Home() {
  return (<Layout>
    <div className={styles.container}>
      <IntroduceUpper />
      <Button>
        Hello react
      </Button>
    </div>
  </Layout>)
}
