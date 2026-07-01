import Header from '../components/Header';
import Hero from '../components/Hero';
import Carrossel from '../components/Carrossel';
import About from '../components/About';

import styles from '../styles/home.module.css';
import Highlights from '../components/Highlights';
import Projects from '../components/Projects';
import Stack from '../components/Stack';
import Building from '../components/Building';
import Contact from '../components/Contact';
import Contributions from '../components/Contributions';


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Carrossel />
      <About />
      <Highlights />
      <Projects />
      <Stack />
      <Building />
      <Contact />
      <Contributions />
    </>
  );
}