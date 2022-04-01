import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Typist from 'react-typist';
import Experience from './Experience';
import portrait from './portrait.png';
import SocialButtons from './SocialButtons';

function Portrait(props) {
    return <Row className='justify-content-center'>
        <img src={portrait} className="App-logo" alt="logo" />
    </Row>
}

function Intro(props) {
    return <Row className='mt-3 justify-content-center'>
        <Typist>Hi, I'm Alfie Newman.</Typist>
    </Row>
}


function Home(props) {
    return <Container>
        <Portrait />
        <Intro />
        <SocialButtons />
        <hr className='Rule' />
        <Experience />
    </Container>
}

export default Home
