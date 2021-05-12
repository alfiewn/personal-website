import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Personal website for Alfie Newman.
        </p>
        <a
          className="App-link"
          href="https://github.com/alfiewn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Find Me On GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
