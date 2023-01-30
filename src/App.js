
import Header from "./components/Header";
import Biography from "./components/Biography";
import Skills from "./components/skills"
import Portfolio from "./components/Portfolio";
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
  </div>
  );
}

export default App;
