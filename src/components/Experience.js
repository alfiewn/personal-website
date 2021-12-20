import { Container, Row } from "react-bootstrap"
import ExperienceBody from "./ExperienceBody"
import ExperienceTitle from "./ExperienceTItle"

function Experience(props){

    return <Container fluid>

        <Row xs={1} md={2}> 
            <ExperienceTitle text="Current Work"/>
            <ExperienceBody text="I joined Expedia Group as a Software Development Engineer in August 2021, based out of Angel, London."/>
        </Row>

        <Row xs={1} md={2}> 
            <ExperienceTitle text="Final Year Project"/>
            <ExperienceBody text="For my final year project I focused on filter bubbles - 
                exploring the role of recommender systems in their construction and the potential for using deep learning in their destruction."/>
        </Row>
        
    </Container>

}

export default Experience