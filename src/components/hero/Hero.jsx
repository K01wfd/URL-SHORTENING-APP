import illustration from '../../assets/images/illustration-working.svg';
import styles from './hero.module.css';
function Hero() {
  return (
    <section className={styles.heroWrapper}>
      <div className={styles.heroDetails}>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand&apos;s recognition and get detailed insights on how
          your links are performing.
        </p>
        <a href='#' className={styles.heroBtn}>
          Get Started
        </a>
      </div>

      <img
        src={illustration}
        className={styles.heroIllustration}
        alt='illustration image'
      />
    </section>
  );
}

export default Hero;
