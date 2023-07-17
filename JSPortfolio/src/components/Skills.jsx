import Bootstrap from '../assets/Icons/icons8-bootstrap-96.png'
import CS from '../assets/Icons/icons8-c-96.png'
import CSS from '../assets/Icons/icons8-css-96.png'
import Django from '../assets/Icons/icons8-django-100.png'
import Express from '../assets/Icons/icons8-express-js-96.png'
import Github from '../assets/Icons/icons8-github-96.png'
import HTML from '../assets/Icons/icons8-html5-96.png'
import JS from '../assets/Icons/icons8-javascript-96 (1).png'
import JQuery from '../assets/Icons/icons8-jquery-100.png'
import LinkedIn from '../assets/Icons/icons8-linkedin-96.png'
import Mongodb from '../assets/Icons/icons8-mongodb-96.png'
import Nodejs from '../assets/Icons/icons8-node-js-96.png'
import Python from '../assets/Icons/icons8-python-96.png'
import ReactJS from '../assets/Icons/icons8-react-80 (1).png'
import Slack from '../assets/Icons/icons8-slack-80.png'
import SQL from '../assets/Icons/icons8-sql-100.png'
import VS from '../assets/Icons/icons8-visual-studio-96.png'
import Xamarin from '../assets/Icons/icons8-xamarin-96.png'
import Zoom from '../assets/Icons/icons8-zoom-96.png'




export default function Skills () {
    return (
        <div>
            <div className="row">
                <div className="col">
                    <div className="row">
                        <p>This is where i will say something about my skills</p>
                        <h3>Skills & Experience</h3>
                        <p>Talk about what you have learned and how you can use it.</p>
                        <p>Visit my GitHub to see my code</p>
                        <p>Check out my Linkedin for more details</p>
                    </div>
                    <div className="row">
                        <img src={Bootstrap} alt="Bootstrap" />
                        <img src={CS} alt="C#" />
                        <img src={CSS} alt="CSS" />
                        <img src={Django} alt="Django" />
                        <img src={Express} alt="Express" />
                        <img src={Github} alt="Github" />
                        <img src={HTML} alt="HTML" />
                        <img src={JS} alt="JS" />
                        <img src={JQuery} alt="jQuery" />
                        <img src={LinkedIn} alt="LinkedIn" />
                        <img src={Mongodb} alt="MongoDB" />
                        <img src={Nodejs} alt="NodeJS" />
                        <img src={Python} alt="Python" />
                        <img src={ReactJS} alt="ReactJS" />
                        <img src={Slack} alt="Slack" />
                        <img src={SQL} alt="SQL" />
                        <img src={VS} alt="VS" />
                        <img src={Xamarin} alt="Xamarin" />
                        <img src={Zoom} alt="Zoom" />
                    </div>
                </div>
            </div>

        </div>

    )
}