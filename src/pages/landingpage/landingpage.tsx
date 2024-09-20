import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import logo from '../../assets/logo.png';
import bgimage from '../../assets/bgimage.png';
import styles from './LandingPage.module.css';
import { Outlet } from 'react-router-dom';
import Search from '../../components/search/Search'
import { useLocation } from 'react-router-dom';

function LandingPage() {
  const location = useLocation();
  const isItemDetailsPage = location.pathname.includes('item/');
  

  return (
    <div className={styles.landingPage}>
      <Header />
        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </div>
        {(!isItemDetailsPage && (
        <div className={styles.searchContainer}>
          <Search />
        </div>
      ))}
        <div className={styles.backgroundImage} style={{ backgroundImage: `url(${bgimage})` }}>
          <h1 className={styles.foodDiaryText}>Food  Diary</h1>
        </div>
        <div className={styles.navLinks}>
          <a href="#" className={styles.navLink}>Home</a>
          <a href="#" className={styles.navLink}>Explore</a>
          <a href="#" className={styles.navLink}>Help</a>
          <a href="#" className={styles.navLink}>Profile</a>
        </div>
        <Outlet />
      <Footer />
    </div>
  );
}

export default LandingPage;