import CSS from '../assets/Icons/icons8-css-96.png'
import HTML from '../assets/Icons/icons8-html5-96.png'
import JS from '../assets/Icons/icons8-javascript-96 (1).png'
import Mongodb from '../assets/Icons/icons8-mongodb-96.png'
import Express from '../assets/Icons/icons8-express-js-96.png'
import Nodejs from '../assets/Icons/icons8-node-js-96.png'


export default function GitTech () {
    return (
        <div className="row">
            <div className="col">
                <div className="row">
                    <h1>Picture goes here</h1>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <h3>Social Media Application</h3>
                    <h2>GitTech</h2>
                </div>
                <div className="row">
                    <p>A quick blurb about the project</p>
                </div>
                <div className="row">
                    <p>Built with:</p>
                    <img src={CSS} alt="CSS" className="myicon"/>
                    <img src={HTML} alt="HTML" className="myicon"/>
                    <img src={JS} alt="JavaScript" className="myicon"/>
                    <img src={Express} alt="Express" className="myicon"/>
                    <img src={Mongodb} alt="MognoDB" className="myicon"/>
                    <img src={Nodejs} alt="NodeJS" className="myicon"/>
                </div>
                <div className="row">
                    <p><a>Website</a></p>
                    <p><a>Code</a></p>
                </div>
            </div>   
        </div>
    )
}