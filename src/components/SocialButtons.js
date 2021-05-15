import linkedinIcon from './linkedin.svg'
import githubIcon from './github.svg'
import twitterIcon from './twitter.svg'

import Row from 'react-bootstrap/Row'

function SocialButtons(props) {
    return <Row className='mt-3 justify-content-center'>
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
}

export default SocialButtons