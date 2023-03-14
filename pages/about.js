import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Navbar from '@/comps/navbar'
import HeroBanner from '@/comps/heroBanner'
import React, { useRef } from 'react';
import Timeline from '@/comps/timeline'
import Footer from '@/comps/footer'
import AboutBanner from '@/comps/aboutBanner'
import Toolbelt from '@/comps/toolbelt'


export default function Home() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar></Navbar>
        <AboutBanner></AboutBanner>
        <Toolbelt></Toolbelt>
        <Footer></Footer>

      </main>
    </>
  )
}

