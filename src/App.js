import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LikePage from "./pages/LikePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/coups-de-coeur" element={<LikePage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
