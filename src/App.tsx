import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { React, useState, useEffect } from "react";

import Navbar from "./components/navbar/Navbar.tsx";
import LoadingScreen from "./components/loading-screen/LoadingScreen.tsx";

import Homepage from "./pages/home/Homepage.tsx";
import About from "./pages/about/About.tsx";
import Portfolio from "./pages/portfolio/Portfolio.tsx";
import Project from "./pages/project/Project.tsx";
import Blog from "./pages/blog/Blog.tsx";
import BlogPost from "./pages/blog-post/BlogPost.tsx";
import NotFound from "./pages/not-found/NotFound.tsx";
import Terminal from "./pages/terminal/Terminal.jsx";

import { db } from "./configs/firebase-config.tsx";

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1800);
  }, []);

  if (!loaded) {
    return (
      <div className="App">
        <LoadingScreen></LoadingScreen>
      </div>
    );
  } else {
    return (
      <div className="App overflow-x-hidden">
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Homepage></Homepage>} exact></Route>
            <Route
              path="/terminal"
              element={<Terminal></Terminal>}
              exact
            ></Route>
            <Route
              path="/portfolio"
              element={<Portfolio db={db}></Portfolio>}
              exact
            ></Route>
            <Route path="/about" element={<About></About>} exact></Route>
            <Route path="/blog" element={<Blog></Blog>} exact></Route>
            <Route
              path="/blog/:name"
              element={<BlogPost></BlogPost>}
              exact
            ></Route>
            <Route
              path="/portfolio/:name"
              element={<Project></Project>}
              exact
            ></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
