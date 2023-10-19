import Navbar from './components/navbar/Navbar';
import Intro from './components/Intro/Intro';
import Skill from './components/Skills/Skill';
import Works from './components/works/Works';
import Contact from './components/contact/Contact';
import Footer from './components/footer/footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skill />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
