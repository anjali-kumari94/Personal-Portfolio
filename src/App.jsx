import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ThreeScene from "./components/ThreeScene";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState("home");
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.className = theme;
  }, [theme]);

  useEffect(() => {
    // Simulate loading time for assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <div className={`App relative min-h-screen ${theme}`}>
        {/* 3D Background Scene */}
        <ThreeScene currentSection={currentSection} />

        {/* Navigation */}
        <Navbar
          onSectionChange={handleSectionChange}
          toggleTheme={toggleTheme}
          theme={theme}
        />

        {/* Main Content */}
        <main className="relative z-10">
          <Hero onSectionChange={handleSectionChange} />
          <About onSectionChange={handleSectionChange} />
          <Skills onSectionChange={handleSectionChange} />
          <Projects onSectionChange={handleSectionChange} />
          <Contact onSectionChange={handleSectionChange} />
        </main>
      </div>
    </Router>
  );
}

export default App;
