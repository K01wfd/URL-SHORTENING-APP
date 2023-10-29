import styles from './cta.module.css';
import btnStyles from '../hero/hero.module.css';

function Cta() {
  return (
    <section className={styles.ctaSection}>
      <h2>Boost your links today</h2>
      <a href='#' className={btnStyles.heroBtn}>
        Get Started
      </a>
    </section>
  );
}

export default Cta;
