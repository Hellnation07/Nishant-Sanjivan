import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Nishant Sanjivan <code>src/App.js</code> 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-link"
          href="https://github.com/Hellnation07"
          target="_blank"
          rel="noopener noreferrer"
        >
          Projects
        </a>
        <a
          className="App-link"
          href="https://www.instagram.com/_hell_nation_0007/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Us
        </a>
      </header>
    </div>
  );
}

export default App;
