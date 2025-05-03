import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Thankyou from "./components/Thankyou"; // Correct path

export default function App() {
  return (
    <Router>
      <div className="overflow-x-hidden">
        <Routes>

          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
                <Footer />
              </>
            }
          />

          <Route path="/thank-you" element={<Thankyou />} />
        </Routes>
      </div>
    </Router>
  );
}
