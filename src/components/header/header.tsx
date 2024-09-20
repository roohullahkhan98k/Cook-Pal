import styles from './header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faSignInAlt, faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.mobileMenu} onClick={handleMenuClick}>
          <FontAwesomeIcon icon={faBars} />
          <ul className={`${styles.mobileMenuLinks} ${mobileMenuOpen ? styles.open : ''}`}>
            <li><a href="#" className={styles.navLink}>COMMUNITY</a></li>
            <li><a href="#" className={styles.navLink}>BOOK</a></li>
            <li><a href="#" className={styles.navLink}>RECIPE INDEX</a></li>
            <li><a href="#" className={styles.navLink}>POPULAR</a></li>
          </ul>
        </div>
        <ul className={styles.desktopMenu}>
          <li><a href="#" className={styles.navLink}>COMMUNITY</a></li>
          <li><a href="#" className={styles.navLink}>BOOK</a></li>
          <li><a href="#" className={styles.navLink}>RECIPE INDEX</a></li>
          <li><a href="#" className={styles.navLink}>POPULAR</a></li>
        </ul>
        <div className={`${styles.rightSide} ${styles.mobile}`}>
          <a href="#" className={styles.navLink}>
            <FontAwesomeIcon icon={faUserPlus} style={{ color: 'green', marginRight: '8px' }} />
            Register
          </a>
          <a href="#" className={styles.navLink}>
            <FontAwesomeIcon icon={faSignInAlt} style={{ color: 'green', marginRight: '8px' }} />
            Login
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;