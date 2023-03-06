import Link from 'next/link';
import styles from '@/styles/Home.module.css'

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/">
          ML
        </Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/about">
            ABOUT
          </Link>
        </li>
        <li>
          <Link href="/portfolio">
            PORTFOLIO
          </Link>
        </li>
        <li>
          <Link href="/contact">
            CONTACT
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;