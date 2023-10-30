import { useState } from 'react';
import styles from './results.module.css';

function Results({ originalLink, shortLink }) {
  const [isCopied, setIsCopied] = useState(false);
  let clipedLink;
  if (window.innerWidth > 785) {
    clipedLink =
      originalLink.length > 50
        ? originalLink.slice(0, 50) + '...'
        : originalLink;
  } else {
    clipedLink =
      originalLink.length > 31
        ? originalLink.slice(0, 25) + '...'
        : originalLink;
  }
  const copyUrl = () => {
    try {
      navigator.clipboard.writeText(shortLink);
      setIsCopied(true);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={styles.results}>
      <div className={styles.result}>
        <p className={styles.originalLink}>{clipedLink}</p>
        <div className={styles.devider}></div>
        <p className={styles.shortendLink}>{shortLink}</p>
        <button
          className={isCopied ? styles.copiedBtn : styles.copyBtn}
          onClick={() => copyUrl()}
        >
          {isCopied ? 'Copied' : 'Copy'}
        </button>
      </div>
    </div>
  );
}

export default Results;
