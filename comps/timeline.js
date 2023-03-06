import styles from '@/styles/Home.module.css'

const Timeline = () => {
  return (
    <div className={styles.component}>
      <div className={styles.line}></div>
      <ul className={styles.list}>
        <li>
          Featured projects
        </li>
        <li>
          <div className={styles.item}>
            <img className={styles.icon} src='/arrow.png' />
            <b>1.</b> Ohana App
            <div className={styles.description}>UX/UI Design</div>
          </div>
        </li>
        <li>
          <div className={styles.item}>
            <img className={styles.icon} src='/arrow.png' />
            <b>2.</b> LocalScoop App
            <div className={styles.description}>UX/UI Design</div>
          </div>
        </li>
        <li>
          <div className={styles.item}>
            <img className={styles.icon} src='/arrow.png' />
            <b>3.</b> Can Design
            <div className={styles.description}>Product Design, Graphic Design</div>
          </div>
        </li>
        <li>
          <div className={styles.item}>
            <img className={styles.icon} src='/arrow.png' />
            <b>4.</b> Beverage Poster
            <div className={styles.description}>Graphic Design</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Timeline;
