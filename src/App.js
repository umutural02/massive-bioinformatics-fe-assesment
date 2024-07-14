import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { themeChange } from 'theme-change'

import Home from "./pages/Home";
import Characters from "./pages/Characters";

function App() {

  useEffect(() => {
    themeChange(false)
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
