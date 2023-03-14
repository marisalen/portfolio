import styles from '@/styles/Contact.module.css';
import { FaThumbsDown, FaThumbsUp } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai'
import { MdOutlineLocalPhone } from 'react-icons/md'
import { BsLinkedin } from 'react-icons/bs'
import { BsArrowUpRight } from 'react-icons/bs'

const Contact = () => {
  return (
    <div className={styles.container}>
        <div>
            <h1>
                Do I have your attention? <br/>
                Let's talk ⬇
            </h1>
        </div>
    <div className={styles.wrapper}>
      <div className={styles.row}>
        <div className={styles.icon}>
        <AiOutlineMail size={30} style={{ fill: '#E4C1F9' }} />
        </div>
        <div className={styles.text}>marisalenarduzzi24@gmail.com</div>
        <a href="mailto:marisalenarduzzi24@gmail.com" target="_blank" className={styles.arrow}>
        <BsArrowUpRight size={30} style={{ fill: '#3e3095' }} />
        </a>
      </div>
      <hr className={styles.divider} />
      <div className={styles.row}>
        <div className={styles.icon}>
        <MdOutlineLocalPhone size={30} style={{ fill: '#E4C1F9' }} />
        </div>
        <div className={styles.text}>(604) 722-6017</div>
        <a href="https://wa.me/16047226017" className={styles.arrow}>
        <BsArrowUpRight size={30} style={{ fill: '#3e3095' }} />
        </a>
      </div>
      <hr className={styles.divider} />
      <div className={styles.row}>
        <div className={styles.icon}>
        <BsLinkedin size={30} style={{ fill: '#E4C1F9' }} />
        </div>
        <div className={styles.text}>/marisa-lenarduzzi</div>
        <a href="https://www.linkedin.com/in/marisa-lenarduzzi/" target="_blank" rel="noopener noreferrer" className={styles.arrow}>
        <BsArrowUpRight size={30} style={{ fill: '#3e3095' }} />
        </a>
      </div>
      </div>
    </div>
  );
};

export default Contact;
