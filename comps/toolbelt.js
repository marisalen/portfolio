import styles from '@/styles/Toolbelt.module.css'

const Toolbelt = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Toolbelt 🛠️</div>
      <div className={styles.grid}>
        <div className={styles.item}>
          <img src="ae.png" alt="Image 1" className={styles.image} />
          <div className={styles.caption}>After Effects</div>
        </div>
        <div className={styles.item}>
          <img src="ai.png" alt="Image 2" className={styles.image2} />
          <div className={styles.caption}>Illustrator</div>
        </div>
        <div className={styles.item}>
          <img src="ps.png" alt="Image 3" className={styles.image3} />
          <div className={styles.caption}>Photoshop</div>
        </div>
        <div className={styles.item}>
          <img src="id.png" alt="Image 4" className={styles.image4} />
          <div className={styles.caption}>InDesign</div>
        </div>
        <div className={styles.item}>
          <img src="nextjs.png" alt="Image 5" className={styles.image5} />
          <div className={styles.caption}>Next.js</div>
        </div>
        <div className={styles.item}>
          <img src="/figma.png" alt="Image 6" className={styles.image6} />
          <div className={styles.caption}>Figma</div>
        </div>
      </div>
    </div>
  )
}

export default Toolbelt
