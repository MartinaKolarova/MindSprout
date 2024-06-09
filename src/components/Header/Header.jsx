import React, { useState } from 'react';
import styles from './style.module.css';
import Link from 'next/link';
import { Love_Ya_Like_A_Sister } from 'next/font/google';

const love_ya_like_a_sister = Love_Ya_Like_A_Sister({
  weight: '400',
  subsets: ['latin'],
});

export const Header = () => {
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);
  const [isNavMenuActive, setIsNavMenuActive] = useState(false);

  const toggleHamburger = () => {
    setIsHamburgerActive(!isHamburgerActive);
    setIsNavMenuActive(!isNavMenuActive);
  };

  const closeMenu = () => {
    setIsHamburgerActive(false);
    setIsNavMenuActive(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.subcontainer}>
          <div className={styles.logo}>
            <p
              className={`${love_ya_like_a_sister.className} ${styles.logoTitle}`}
            >
              Mind Sprout
            </p>
          </div>
          <nav className={styles.navbar}>
            <ul
              className={`${styles.navMenu} ${
                isNavMenuActive ? styles.active : ''
              }`}
            >
              <li className={styles.navItem}>
                <Link href="/" className={styles.navLink} onClick={closeMenu}>
                  Domů
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link
                  href="/kontakty"
                  className={styles.navLink}
                  onClick={closeMenu}
                >
                  Kontakt
                </Link>
              </li>
            </ul>
            <div
              className={`${styles.hamburger} ${
                isHamburgerActive ? styles.active : ''
              }`}
              onClick={toggleHamburger}
            >
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
