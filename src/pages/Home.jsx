import About from "../components/About";
import Building from "../components/Building";
import Carrossel from "../components/Carrossel";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import Projects from "../components/Projects";
import Stack from "../components/Stack";

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
            <Footer />
        </>
    )
}