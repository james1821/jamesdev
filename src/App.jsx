import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Works from "./components/Projects/Works";
import Exp from "./components/Exp";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Works />
      <Exp />
    </div>
  );
}

export default App;
