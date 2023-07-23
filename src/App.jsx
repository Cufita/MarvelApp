import { BrowserRouter as Routes, Router, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route to={"/"} element={<Home></Home>}></Route>
        <Route to={"Details"} element={<Details></Details>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
