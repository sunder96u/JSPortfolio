import ProjectWRXPicture from '../assets/ProjectWRXhome.png'
import Mongodb from '../assets/Icons/icons8-mongodb-96.png'
import Nodejs from '../assets/Icons/icons8-node-js-96.png'
import Express from '../assets/Icons/icons8-express-js-96.png'
import ReactJS from '../assets/Icons/icons8-react-80 (1).png'

export default function ProjectWRX () {
    return (
        <div className="row">
             <div className="col">
                <div className="row">
                    <h3>Project Management Application</h3>
                    <h2>ProjectWRX</h2>
                </div>
                <div className="row">
                    <p>We live in a fast-paced world where managing multiple tasks and coordinating teams can become overwhelming and chaotic. It's easy to lose track of project progress, deadlines, and who's responsible for what. We recognized this challenge and created ProjectWorx to simplify project management and streamline collaboration.</p>
                </div>
                <div className="row">
                    <p>Built with:</p>
                    <img src={Mongodb} alt="MongoDB" className="myicon"/>
                    <img src={Express} alt="Express" className="myicon"/>
                    <img src={ReactJS} alt="ReactJS" className="myicon"/>
                    <img src={Nodejs} alt="NodeJS" className="myicon"/>
                </div>
                <div className="row">
                    <p><a>Website</a></p>
                    <p><a>Front-end Code</a></p>
                    <p><a>Back-end Code</a></p>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <h1>Picture goes here</h1>
                </div>
             </div>   
        </div>
    )
}