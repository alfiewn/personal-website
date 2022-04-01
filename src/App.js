import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import 'react-typist/dist/Typist.css';
import './App.css';
import Home from './components/Home';
import NavBar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </header>
      <footer className="App-footer">
        Copyright &#169; {(new Date().getFullYear())}
      </footer>
    </div>
  );
}

export default App;
