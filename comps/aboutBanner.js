import styles from '@/styles/AboutBanner.module.css'

const AboutBanner = () => {
return (
<div className={styles.container}>
<div className={styles.imageContainer}>
<img src="/marisaoval.png" alt="Marisa Lenarduzzi" className={styles.image} />
</div>
<div className={styles.textContainer}>
<h2>About Me 👋</h2>
<p>Hi there, my name is Marisa Lenarduzzi, I am a multi-disciplinary designer specializing in Graphic Design based in Vancouver, BC.
My work ranges from friendly and accessible to conceptual - all focusing on the projects goals.</p>
</div>
</div>
)
}

export default AboutBanner
