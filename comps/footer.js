import styles from '@/styles/Home.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <div className={styles.topLeft}>Follow</div>
        <div className={styles.bottomLeftRow}>
          <img src='/instagram.png' />
          <img src='/linkedin.png' />
        </div>
      </div>
      <div className={styles.right}>©MarisaLenarduzzi2023</div>
    </footer>
  )
}

export default Footer
