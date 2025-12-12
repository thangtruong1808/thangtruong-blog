import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BlogPage from "./components/BlogPage";
import About from "./components/About";
import Education from "./components/Education";
import Contact from "./components/Contact";
import ScrollButtons from "./components/ScrollButtons";
import authorPhoto from "./assets/TT-Photo.jpg";
import FeaturedProjectsPage from "./components/FeaturedProjectsPage";
import ProjectDetailPage from "./components/ProjectDetailPage";
import SkillsPage from "./components/SkillsPage";
import Experience from "./components/Experience";

function App() {
  const authorInfo = {
    authorName: "Thang Truong",
    authorBio:
      "Passionate front-end and full-stack developer with expertise in React.js, Next.js, GraphQL, Node.js, Express.js, MySQL, PostgreSQL, MongoDB, AWS, and modern web technologies. I specialize in creating responsive, scalable applications and sharing knowledge with the developer community.",
    authorAvatar: authorPhoto,
  };

  const navCategories = ["Home", "About", "Projects", "Skills", "Experience", "Contact"];

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
        <header className="sticky top-0 z-40 w-full">
          <NavBar
            logo="Thang Truong"
            categories={navCategories}
          />
        </header>

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<BlogPage {...authorInfo} />} />
            <Route path="/home" element={<BlogPage {...authorInfo} />} />
            <Route path="/about" element={<About {...authorInfo} />} />
            <Route path="/projects" element={<FeaturedProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetailPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/experience" element={<Experience />} />
            {/* Education route retained in case deep links exist; removed from nav */}
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <ScrollButtons />
        <Footer categories={navCategories} />
      </div>
    </Router>
  );
}

export default App;
