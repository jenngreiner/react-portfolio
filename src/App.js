import "./styles/css/style.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Bio from "./components/Bio";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/Contact";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      <Header />
          <Route exact path="/" component={Bio} />
          <Route exact path="/portfolio"
            component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
