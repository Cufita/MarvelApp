import { Route, Routes } from "react-router-dom";

import "./App.css";

// Import routes

import Home from "./routes/Home";
import HeroDetails from "./routes/HeroDetails";

// Import Componentes

function App() {
  return (
    <div className="mainDiv">
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<HeroDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
