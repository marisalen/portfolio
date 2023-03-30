import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import { useRouter } from 'next/router';



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
            <a href='/ohana'><b>1.</b> Ohana App</a>
            <div className={styles.description}>UX/UI Design</div>
          </div>
        </li>
        <li>
          <div className={styles.item}>
            <img className={styles.icon} src='/arrow.png' />
            <a href='/localscoop'><b>2.</b> LocalScoop App</a>
            <div className={styles.description}>UX/UI Design</div>
          </div>
        </li>
        <li>
          <div className={styles.item}>
            <img className={styles.icon} src='/arrow.png' />
            <a href='/can'><b>3.</b> Can Design</a>
            <div className={styles.description}>Product Design, Graphic Design</div>
          </div>
        </li>
        <li>
          <div className={styles.item}>
            <img className={styles.icon} src='/arrow.png' />
            <a href='/emag'><b>4.</b> In the Trees E-Mag</a>
            <div className={styles.description}>UX/UI Designer</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Timeline;
