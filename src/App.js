import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        {/*path=* fonctionne si url correspond à rien crtl + / pour commentaire*/}
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;