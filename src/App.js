import { useEffect } from "react";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";

import { themeChange } from 'theme-change'

import Home from "./pages/Home";
import Characters from "./pages/Characters";
import NotFound from "./pages/NotFound";

function App() {

  useEffect(() => {
    themeChange(false)
  }, [])

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
