import React, { useState } from 'react';
import logo from '../../assets/images/logo.svg';
import styles from './header.module.css';
function Header() {
  const [navActive, setNavActive] = useState(false);
  window.addEventListener('resize', (e) => {
    if (e.target.innerWidth > 750) {
      setNavActive(false);
    }
  });
  const handleActiveNav = (e) => {
    e.target.checked ? setNavActive(true) : setNavActive(false);
  };
  return (
    <header>
      <div className={styles.headerWrapper}>
        <img className={styles.logo} src={logo} alt='logo' />
        <div className={styles.navToggler}>
          <input
            type='checkbox'
            data-id='toggler'
            onChange={(e) => handleActiveNav(e)}
            id='toggler'
          />
          <label htmlFor='toggler'></label>
          <label htmlFor='toggler'></label>
          <label htmlFor='toggler'></label>
        </div>
        <nav>
          <ul className={navActive ? styles.activeNav : styles.navList}>
            <li className={styles.navItem}>
              <a href='#'>Pricing</a>
            </li>
            <li className={styles.navItem}>
              <a href='#'>Features</a>
            </li>
            <li className={styles.navItem}>
              <a href='#'>Resources</a>
            </li>
            <li>
              <div className={styles.ruler}></div>
            </li>
            {navActive && (
              <li>
                <div className={styles.headerBtnBox}>
                  <a href='#' data-id='login'>
                    Login
                  </a>
                  <a href='#' className={styles.btnHeader}>
                    Sign Up
                  </a>
                </div>
              </li>
            )}
          </ul>
        </nav>

        <div className={styles.headerBtnBox}>
          <a href='#' data-id='login'>
            Login
          </a>
          <a href='#' className={styles.btnHeader}>
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
