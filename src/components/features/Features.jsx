import React from 'react';
import styles from './features.module.css';
import formStyles from './form.module.css';
import brand from '../../assets/images/icon-brand-recognition.svg';
import records from '../../assets/images/icon-detailed-records.svg';
import customise from '../../assets/images/icon-fully-customizable.svg';
import Results from '../results/Results';
function Features({
  readyURLs,
  error,
  handleInputChange,
  onFormSubmit,
  inputValue,
}) {
  return (
    <section className={styles.featuresSection}>
      <div className={formStyles.formWrapper}>
        <form action='' onSubmit={onFormSubmit}>
          <div className={formStyles.inputGroup}>
            <input
              type='text'
              className={formStyles.linkField}
              placeholder='Shorten a link here...'
              onChange={handleInputChange}
              value={inputValue}
            />
            <p className={formStyles.errorMessage}>{error}</p>
          </div>
          <button className={formStyles.shortenBtn}>Shorten It!</button>
        </form>
        {readyURLs.length !== 0 &&
          readyURLs.map((url) => (
            <Results
              key={url.shortUrl}
              shortLink={url.shortUrl}
              originalLink={url.original}
            />
          ))}
      </div>
      <div className={styles.featureswrapper}>
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div className={styles.features}>
          <div className={styles.strip}></div>
          <article className={styles.feature}>
            <div className={styles.iconBox}>
              <img
                className={styles.featureIcon}
                src={brand}
                alt='brand recognition icon'
              />
            </div>
            <h3>Brand Recognition</h3>
            <p>
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </article>
          {/*  */}
          <article className={styles.feature}>
            <div className={styles.iconBox}>
              <img
                className={styles.featureIcon}
                src={records}
                alt='records icon'
              />
            </div>
            <h3>Detailed Records</h3>
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </article>
          {/*  */}
          <article className={styles.feature}>
            <div className={styles.iconBox}>
              <img
                className={styles.featureIcon}
                src={customise}
                alt='customizing icon'
              />
            </div>
            <h3>Fully Customizable</h3>
            <p>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Features;
