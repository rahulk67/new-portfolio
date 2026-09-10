import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Capabilities from "./components/Capabilities";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PageLoader from "./components/PageLoader";

function App() {
  return (
    <div className="container">
      <PageLoader />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Capabilities />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;