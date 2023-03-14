import styles from '@/styles/Home.module.css'

const HeroBanner = () => {
    return (
      <div className={styles.heroBanner}>
        <div className={styles.heroText}>
          <h1><em>Hi there,</em> I'm marisa lenarduzzi</h1>
          <p>Designing digital experiences that engage and delight. My passion is creating interfaces that are intuitive, inclusive, and user-friendly. Let's work together to bring your vision to life and make your digital presence accessible to all.</p>
          <button className={styles.leftButton}>Portfolio</button>
          <button className={styles.rightButton}>Get in Touch</button>
        </div>
        <div className={styles.heroImage}>
          <img src="/marisaavatar.png" alt="Hero Image" />
        </div>
      </div>
    );
  };
  
  export default HeroBanner;
  