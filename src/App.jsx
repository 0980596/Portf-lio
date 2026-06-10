import { useEffect } from "react";
import Lenis from "lenis";
import "./App.css";
import RoutesApp from "./routes";

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <RoutesApp />
  );
}

export default App;
