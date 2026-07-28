import Header from '../components/Header';
import Hero from '../components/Hero';
import Carrossel from '../components/Carrossel';
import About from '../components/About';
// import Highlights from '../components/Highlights';
import Projects from '../components/Projects';
import Stack from '../components/Stack';
// import Building from '../components/Building';
import Contact from '../components/Contact';
import Contributions from '../components/Contributions';
import Footer from '../components/Footer';

import styles from '../styles/home.module.css';

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.sectionFrame}>
        <Hero />
      </div>
      <div className={styles.sectionFrame}>
        <Carrossel />
      </div>
      <div className={styles.sectionFrame}>
        <About />
      </div>
      {/* <Highlights /> */}
      <div className={styles.sectionFrame}>
        <Projects />
      </div>
      <div className={styles.sectionFrame}>
        <Stack />
      </div>
      {/* <Building /> */}
      <div className={styles.sectionFrame}>
        <Contact />
      </div>
      <div className={styles.sectionFrame}>
        <Contributions />
      </div>
      <Footer />
    </>
  );
}