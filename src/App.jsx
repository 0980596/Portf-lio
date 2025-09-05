import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Footer from "./components/Footer";
import Projetos from "./components/Projetos";
import Contato from "./components/Contato";


function App() {
  return (
    <>
     <Header />
     <Hero />
     <Projetos />
     <Sobre />
     <Contato />
     <Footer />
    </>
  );
}

export default App;
