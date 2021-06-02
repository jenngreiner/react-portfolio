import "./styles/css/style.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Bio from "./components/Bio";
import Project from "./components/Project";
import Contact from "./components/Contact";
import projects from "./projects.json"

function App() {
  return (
    <div>
      <Header />
      <Bio />
      <Project projects={projects}
      />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
