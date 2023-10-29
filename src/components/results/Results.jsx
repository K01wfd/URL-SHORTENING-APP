import styles from './results.module.css';

function Results() {
  const originalLink =
    ' https://www.frontendmentor.io/www.frontendmentor.io/www.frontendmentor.io';
  const shortLink =
    originalLink.length > 31 ? originalLink.slice(0, 31) + '...' : originalLink;
  return (
    <div className={styles.results}>
      <div className={styles.result}>
        <p className={styles.originalLink}>{shortLink}</p>
        <div className={styles.devider}></div>
        <p className={styles.shortendLink}>https://rel.ink/k4lKyk</p>
        <button className={styles.copyBtn}>copy</button>
      </div>
    </div>
  );
}

export default Results;
