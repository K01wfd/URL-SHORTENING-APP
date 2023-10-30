import styles from './footer.module.css';
import logoLight from '../../assets/images/logo-light.svg';
import sprites from '../../assets/images/sprites.svg';
function Footer() {
  return (
    <footer>
      <div className={styles.footerWrapper}>
        <img src={logoLight} className={styles.logo} alt='light logo' />
        <nav className={styles.footerNav}>
          <ul className={styles.featuresList}>
            <li>Features</li>
            <li>
              <a href='#'>Link Shortening</a>
            </li>
            <li>
              <a href='#'>Branded Links</a>
            </li>
            <li>
              <a href='#'>Analytics</a>
            </li>
          </ul>
          <ul className={styles.resourcesLinks}>
            <li>Resources</li>
            <li>
              <a href='#'>Blog</a>
            </li>
            <li>
              <a href='#'>Developers</a>
            </li>
            <li>
              <a href='#'>Support</a>
            </li>
          </ul>
          <ul className={styles.companyList}>
            <li>Company</li>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>Our Team</a>
            </li>
            <li>
              <a href='#'>Careers</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </nav>
        <div className={styles.socials}>
          <svg className='icon'>
            <use href={`${sprites}#icon-facebook`}></use>
          </svg>
          <svg className='icon'>
            <use href={`${sprites}#icon-twitter`}></use>
          </svg>
          <svg className='icon'>
            <use href={`${sprites}#icon-pinterest`}></use>
          </svg>
          <svg className='icon'>
            <use href={`${sprites}#icon-instagram`}></use>
          </svg>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
