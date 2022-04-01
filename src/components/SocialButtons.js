import Row from 'react-bootstrap/Row'
import githubIcon from '../images/github.svg'
import linkedinIcon from '../images/linkedin.svg'
import twitterIcon from '../images/twitter.svg'

function SocialButtons(props) {
    return <Row className='mt-3 justify-content-center'>
        <a href='https://github.com/alfiewn'>
            <img className='pr-2' src={githubIcon} alt='Github Link'/>
        </a>
        <a href='https://www.linkedin.com/in/alfie-newman-20598b163/'>
            <img src={linkedinIcon} alt='LinkedIn Link'/>
        </a>
        <a href='https://twitter.com/alfiewnewman'>
            <img className='pl-2' src={twitterIcon} alt='Twitter Link'/>
        </a>
    </Row>
}

export default SocialButtons