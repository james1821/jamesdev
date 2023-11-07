import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Works from "./components/Projects/Works";
import Exp from "./components/Exp";
import Contacts from "./components/Contacts";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Works />
      <Exp />
      <Contacts />
    </div>
  );
}

export default App;
