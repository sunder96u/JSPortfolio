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
import Swift from '../assets/Icons/icons8-swift-96.png'
import XCode from '../assets/Icons/icons8-xcode-96.png'




export default function Skills () {
    return (
        <div className='box'>
            <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <h1>Skills & Experience</h1>
                            <p>I possess a strong foundation in both back-end and front-end development. Proficient in C#, I am capable of building robust and scalable applications; while my experience in JavaScript and React empowers me to create dynamic and interactive user interfaces. Equipped with a versatile skill set, I am adept at bridging the gap between different programming languages and frameworks, enabling me to tackle a wide range of development challenges with precision and efficiency.</p>
                            <p>Visit my <a href="https://github.com/sunder96u" target="_blank">GitHub</a> to see my codes</p>
                            <p>Check out my <a href="https://www.linkedin.com/in/steven--underwood/" target="_blank">LinkedIn</a> for more details</p>
                        </div>
                        <div className="row center">
                            <img src={Bootstrap} alt="Bootstrap" className="myicon"/>
                            <img src={CS} alt="C#" className="myicon"/>
                            <img src={CSS} alt="CSS" className="myicon"/>
                            <img src={Django} alt="Django" className="myicon"/>
                            <img src={Express} alt="Express" className="myicon"/>
                            <img src={Github} alt="Github" className="myicon"/>
                            <img src={HTML} alt="HTML" className="myicon"/>
                            <img src={JS} alt="JS" className="myicon"/>
                            <img src={JQuery} alt="jQuery" className="myicon"/>
                            <img src={Mongodb} alt="MongoDB" className="myicon"/>
                            <img src={Nodejs} alt="NodeJS" className="myicon"/>
                            <img src={Python} alt="Python" className="myicon"/>
                            <img src={ReactJS} alt="ReactJS" className="myicon"/>
                            <img src={Slack} alt="Slack" className="myicon"/>
                            <img src={Swift} alt="Swift" className="myicon"/>
                            <img src={SQL} alt="SQL" className="myicon"/>
                            <img src={VS} alt="VS" className="myicon"/>
                            <img src={XCode} alt="Xcode" className="myicon"/>
                            <img src={Xamarin} alt="Xamarin" className="myicon"/>
                            <img src={Zoom} alt="Zoom" className="myicon"/>
                        </div>
                    </div>
            </div>
        </div>
    )
}