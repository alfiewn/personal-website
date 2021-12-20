import portrait from './portrait.png';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Typist from 'react-typist';

import SocialButtons from './components/SocialButtons'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-typist/dist/Typist.css'

import './App.css';
import Experience from './components/Experience';


function Portrait(props) {
  return <Row className='justify-content-center'>
    <img src={portrait} className="App-logo" alt="logo" />
  </Row>
}

function Intro(props) {
  return <Row className='mt-3 justify-content-center'>
    <Typist>
      Hi, I'm Alfie Newman.
  </Typist>
  </Row>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Portrait />
          <Intro />
          <SocialButtons />
          <hr className='Rule'/>
          <Experience/>
        </Container>
      </header>
      <footer className="App-footer">
        Copyright &#169; {(new Date().getFullYear())}
      </footer>
    </div>
  );
}

export default App;
