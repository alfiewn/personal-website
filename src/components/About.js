import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Typist from 'react-typist';
import portrait from '../images/portrait.png';
import SocialButtons from './SocialButtons';

function Portrait(props) {
    return <Row className='justify-content-center'>
        <img src={portrait} className="App-logo" alt="logo" />
    </Row>
}

function Intro(props) {
    return <Row className='mt-3 justify-content-center'>
        <Typist>Hi, I'm Alfie.</Typist>
    </Row>
}

function Description(props) {
    return <Row>
        <p>A full stack software development engineer and first class Computer Science graduate from the University of Bath, I'm currently working for 
            Expedia Group in London building great experiences for millions of travellers.</p>
    </Row>
}

function About(props) {
    return <Container>
        <Portrait />
        <Intro />
        <SocialButtons />
        <hr className='Rule' />
        <Description />
    </Container>
}

export default About
