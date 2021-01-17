import Layout from '../components/Layout';
// import styles from '../styles/Home.module.css'
import TestContact from '../components/TestContact';


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
      <TestContact />
      <Tweet content='props.content' />
    </Layout>
  </div>)
}