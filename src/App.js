import Navbar from "./components/NavBar/navBar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Clients from "./components/Clients/clients";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
