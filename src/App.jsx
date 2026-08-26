import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Categorias from "./pages/Categorias";
import Jueces from "./pages/Jueces";
import Cronograma from "./pages/Cronograma";
import Hackathon from "./pages/Hackathon";
import Participa from "./pages/Participa";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/jueces" element={<Jueces />} />
          <Route path="/cronograma" element={<Cronograma />} />
          <Route path="/hackathon" element={<Hackathon />} />
          <Route path="/participa" element={<Participa />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
