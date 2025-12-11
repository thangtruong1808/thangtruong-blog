import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BlogPage from "./components/BlogPage";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import ScrollButtons from "./components/ScrollButtons";

function App() {
  const authorInfo = {
    authorName: "Thang Truong",
    authorBio:
      "Passionate front-end and full-stack developer with expertise in React, TypeScript, Node.js, and modern web technologies. I specialize in creating responsive, scalable applications and sharing knowledge with the developer community.",
    authorAvatar: "",
  };

  const navCategories = [
    "Home",
    "About",
    "Projects",
    "Skills",
    "Education",
    "Contact",
  ];

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
        <header className="sticky top-0 z-40 w-full">
          <NavBar
            logo="Thang Truong"
            categories={navCategories}
            userName="Thang Truong"
            userAvatar=""
          />
        </header>

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<BlogPage {...authorInfo} />} />
            <Route path="/home" element={<BlogPage {...authorInfo} />} />
            <Route path="/about" element={<About {...authorInfo} />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <ScrollButtons />
        <Footer companyName="Thang Truong" categories={navCategories} />
      </div>
    </Router>
  );
}

export default App;
