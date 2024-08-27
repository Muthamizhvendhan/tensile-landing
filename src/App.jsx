import { useState } from "react";
import SectionOne from "./components/SectionOne";
import FullPageSections from "./components/FullPageSections";
import Services from "./components/Whychoose";
import Whychoose from "./components/Services";
import About from "./components/About";
import Testimonials from "./components/Testimonial";
import Cta from "./components/Cta";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SectionOne />
                <FullPageSections />
                <About />
                <Services />
                <Whychoose />
                <Testimonials />
                <Cta />
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
