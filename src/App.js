import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import GamingPage from "./pages/GamingPage";
import GamblingPage from "./pages/GamblingPage";
import ResourcesPage from "./pages/ResourcesPage";
import QuizPage from "./pages/QuizPage";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gaming" element={<GamingPage />} />
        <Route path="/gambling" element={<GamblingPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
