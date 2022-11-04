import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import BG from '../assets/barot.jpg'
export default function Home() {
  return (

    <Layout>
      <div >
        <Image src={BG} alt='home' className='bg-no-repeat bg-center w-screen'/>
      </div>

    </Layout>

  )
}
