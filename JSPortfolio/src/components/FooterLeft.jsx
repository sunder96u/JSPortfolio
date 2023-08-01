import LinkedIn from '../assets/Icons/icons8-linkedin-96.png'
import Github from '../assets/Icons/icons8-github-96.png'

export default function FooterLeft () {
    return (
        <div className="col-2 inline">
            <a href="https://github.com/sunder96u" target="_blank"><img src={Github} alt="github" className="sml-icon" /></a>
            <a href="https://www.linkedin.com/in/steven--underwood/" target="_blank"><img src={LinkedIn} alt="LinkedIn" className="sml-icon" /></a>
        </div>

    )
}