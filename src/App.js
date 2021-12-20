// import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Home />
        </div>
      </div>
    </Router>
  );
}

export default App;
