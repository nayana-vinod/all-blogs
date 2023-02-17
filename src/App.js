import './index.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <div className="App">

      <Navbar></Navbar>
      {/* or <Navbar/> self closed*/}
      <div className="content">
        <Home/>
      </div>
      
    </div>
  );
}

// to import this in index.js
export default App;
