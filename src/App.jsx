import "./App.css";

import Footer from "./components/Footer";
// import About from "./view/About";

import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./view/home";
import About from "./view/About";
import Nav from "./components/Nav";
import Security from "./view/security";
import PersonalLoan from "./view/PersonalLoan";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/security" element={<Security />} />
        <Route path="/personal-loan" element={<PersonalLoan />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
