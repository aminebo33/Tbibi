import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Symptoms from "./Pages/Symptoms";
import Doctors from "./Pages/Doctors";
import Contact from "./Pages/Contact";

function App() {
  return (
    <BrowserRouter basename="/Tbibi">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/symptoms" element={<Symptoms />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
