import styles from './Footer.module.css';
import footerBg from '../../assets/footerbg.png';
import footerLogo from '../../assets/footerlogo.png';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerLogoContainer}>
        <img src={footerLogo} alt="Footer Logo" className={styles.footerLogo} />
      </div>
      <div className={styles.footerContent}>
      All Rights Reserved
      </div>
      <div className={styles.footerBg} style={{ backgroundImage: `url(${footerBg})` }}></div>
    </div>
  );
}

export default Footer;