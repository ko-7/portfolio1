import Layout from '../components/Layout';
// import styles from '../styles/Home.module.css'
import TestComponent from '../components/TestComponent';
import TestFormik from '../components/TestFormik';
import TestContact from '../components/TestContact';
import TestContact2 from '../components/TestContact2';


const Tweet = (props) => {
  return(<div>
    <div>{props.content}</div>
    <div>{props.content}</div>
    <div>{props.content}</div>
  </div>)
}

export default function Home() {
  return (<div>
    <Layout>
      {/* <div className={styles.container}> */}
      <TestContact />
      {/* <TestComponent /> */}
      {/* <TestFormik /> */}
      {/* <TestContact2 /> */}
      {/* <Tweet content='props.content' /> */}
    </Layout>
  </div>)
}