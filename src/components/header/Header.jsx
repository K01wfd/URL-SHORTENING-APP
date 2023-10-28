import React from 'react';
import logo from '../../assets/images/logo.svg';
import styles from './header.module.css';
function Header() {
  return (
    <header>
      <div className={styles.headerWrapper}>
        <img className={styles.logo} src={logo} alt='logo' />
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href='#'>Pricing</a>
            </li>
            <li className={styles.navItem}>
              <a href='#'>Features</a>
            </li>
            <li className={styles.navItem}>
              <a href='#'>Resources</a>
            </li>
          </ul>
        </nav>
        <div className={styles.headerBtnBox}>
          <a href='#'>Login</a>
          <a href='#' className={styles.btnHeader}>
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
