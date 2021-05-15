import portrait from './portrait.png';
import linkedinIcon from './linkedin.svg'
import githubIcon from './github.svg'
import twitterIcon from './twitter.svg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Typist from 'react-typist';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-typist/dist/Typist.css'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>

          <Row className='justify-content-center'>
            <img src={portrait} className="App-logo" alt="logo" />
          </Row>
          <Row className='mt-3 justify-content-center'>
            <Typist>
              Hi, I'm Alfie Newman. Welcome to my personal website!
            </Typist>
          </Row>
          <Row className='mt-3 justify-content-center'>
            <a href='https://github.com/alfiewn'>
              <img className='pr-2' src={githubIcon} />
            </a>
            <a href='https://www.linkedin.com/in/alfie-newman-20598b163/'>
              <img src={linkedinIcon} />
            </a>
            <a href='https://twitter.com/alfiewnewman'>
              <img className='pl-2' src={twitterIcon} />
            </a>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
