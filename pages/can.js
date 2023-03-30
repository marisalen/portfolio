import React from 'react';
import Carousel from '@/comps/carousel';
import styles from '@/styles/Project.module.css';
import Navbar from '@/comps/navbar';
import Head from 'next/head';
import Footer from '@/comps/footer';

const Project = () => {
  const projectImages = [
    'cansmockup.png',
    'foolsour.png',
    '3ofswords.png',
    'themoongose.png',
  ];

  return (
    <>
    <Head>
      <title>Marisa Lenarduzzi</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/logo.ico" />
    </Head>
    <main className={styles.main}> 
    <Navbar/>
    <div className={styles.project}>   
      <div className={styles.projectHeader}>
        <h1 className={styles.projectTitle}>Fated Cans</h1>
        <p className={styles.projectDate}>Date: November 2022</p>
      </div>
      <Carousel images={projectImages} />
      <div className={styles.projectDescription}>
        <h2>Description</h2>
        <p>These 3 beer cans were made using Illustrator to layout the proofs and draw the unique can design. The designs were transferred to photoshop where filters were applied and mockups were made of the cans for the client.  </p>
      </div>
      <div className={styles.projectInfo}>
        <div className={styles.projectInfoItem}>
          <h3>Tools Used</h3>
          <ul>
            <li>Photoshop</li>
            <li>Illustrator</li>
          </ul>
        </div>
        <div className={styles.projectInfoItem}>
          <h3>Roles</h3>
          <ul>
            <li>Product Design</li>
            <li>Package Design</li>
            <li>Logo Design</li>
          </ul>
        </div>
      </div>
    </div>
    <Footer />
    </main>
    </>
  );
};

export default Project;
