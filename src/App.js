import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/navbar/Navbar";
import LoadingScreen from "./components/loading-screen/LoadingScreen";

import Homepage from "./pages/home/Homepage";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";

function App() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, []);
  if (!loaded) {
    return (
      <div className="App">
        <LoadingScreen></LoadingScreen>
      </div>
    );
  } else {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Homepage></Homepage>} exact></Route>
            <Route
              path="/portfolio"
              element={<Portfolio></Portfolio>}
              exact
            ></Route>
            <Route path="/about" element={<About></About>} exact></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
