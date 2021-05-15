import portrait from './portrait.png';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Typist from 'react-typist';

import SocialButtons from './components/SocialButtons'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-typist/dist/Typist.css'

import './App.css';


function Portrait(props) {
  return <Row className='justify-content-center'>
    <img src={portrait} className="App-logo" alt="logo" />
  </Row>
}

function Intro(props) {
  return <Row className='mt-3 justify-content-center'>
    <Typist>
      Hi, I'm Alfie Newman. Welcome to my personal website!
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
        </Container>
      </header>
    </div>
  );
}

export default App;
