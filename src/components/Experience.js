import { Container, Row } from "react-bootstrap"
import ExperienceBody from "./ExperienceBody"
import ExperienceTitle from "./ExperienceTItle"

function ExperienceModule(props) {
    return <Row xs={1} md={2}>
        <ExperienceTitle text={props.title} />
        <ExperienceBody text={props.body} />
    </Row>
}


function Experience(props) {

    return <Container fluid>
        <ExperienceModule
            title="Current Work"
            body="I joined Expedia Group as a Software Development Engineer in August 2021, based out of Angel, London."
        />

        <ExperienceModule
            title="Graduating from University"
            body="In June 2021 I graduated from The University of Bath with First Class Honours in Computer Science, Bsc."
        />

        <ExperienceModule
            title="Final Year Project"
            body="For my final year project I focused on filter bubbles - exploring the role of recommender systems in their construction and the potential for using deep learning in their destruction."
        />

    </Container>

}

export default Experience