import { Route, Routes } from "react-router-dom";

import "./App.css";

// Import routes

import Home from "./routes/Home";
import About from "./routes/About";
import HeroDetails from "./routes/HeroDetails";

// Import Componentes

import Navbar from "./components/navbar";
function App() {
  return (
    <div>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/:id" element={<HeroDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
