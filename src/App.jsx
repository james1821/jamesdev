
import './App.css';
import Navbar from './components/Navbar'; 
import Home from './components/Home';
import About from './components/About';
import MyData from './components/MyData';

function App() {
  return (
    <div>
      <Global
        styles={css`
          body {
            margin: 0;
          }
        `}
      />
      
     <Navbar/>
     <Home/>
     <About  MyData={MyData}/>
     
    </div>
 
  );
}

export default App;
