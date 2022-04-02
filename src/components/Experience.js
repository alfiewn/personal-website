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

    return <Container>
        <ExperienceModule
            title="Expedia Group"
            body="I initially joined Expedia Group as a Software Development Engineer intern in June 2019, completing a year long placement working on SEM tech solutions.
        I rejoined in August 2021, working in the Fintech space for Expedia Partner Solutions."
        />
        <hr className='Rule' />
        <ExperienceModule
            title="University of Bath"
            body="In June 2021 I graduated from The University of Bath with First Class Honours in Computer Science, Bsc. I acheived a mark of 82% for my dissertation titled AltArticle: Fighting the Filter Bubble with Alternative Article Recommendations."
        />
        <hr className='Rule' />
        <ExperienceModule
            title="Prior to University"
            body="Experience gained previous to graduation includes teaching English in Bali, Indonesia, and work experience placements at PepsiCo and Grey Matter Ltd."
        />

    </Container>

}

export default Experience