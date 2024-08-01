import "./styles/css/style.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Bio from "./pages/Bio";
import Portfolio from "./pages/Portfolio";
import AboutMe from "./pages/AboutMe";
import {
  HashRouter as Router,
  Route
} from "react-router-dom";
import Experience from "./pages/Experience";

function App() {
  return (
    <Router>
      <main className="flex-shrink-0">
        <Header />
        <Route exact path="/" component={Bio} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/jobs" component={Experience} />
        <Route exact path="/about" component={AboutMe} />
        <Footer />
      </main>
    </Router>
  );
}

export default App;
