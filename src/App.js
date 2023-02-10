
import Header from "./components/Header";
import Biography from "./components/Biography";
import Skills from "./components/skills"
import Portfolio from "./components/Portfolio";
import SecondBanner from "./components/SecondBanner";
import Footer from "./components/Footer";
import "./App.css"

function App() {
  return (

  <div className="background_page">
  <div className="container_page">
  <Header/>
  <Biography/>
  <Skills/>
  </div>
  <Portfolio/>
  <SecondBanner/>
  <Footer/>
  </div>
  );
}

export default App;
