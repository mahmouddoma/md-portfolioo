import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Header/Layout";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import Resume from "./components/Resume/Resume";
import Experience from "./components/Experience/Experience";
import ContactMe from "./components/contact/Contact";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <BrowserRouter basename={"/md-portfolioo"}>
      <Routes>
        {" "}
        <Route
          path="/"
          element={
            <Hero
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          }
        />
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <div>
                <Hero
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
              </div>
            }
          />
          <Route
            path="projects"
            element={<Projects selectedCategory={selectedCategory} />}
          />
          <Route path="resume" element={<Resume />} />
          <Route path="experience" element={<Experience />} />
          <Route path="contact" element={<ContactMe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
