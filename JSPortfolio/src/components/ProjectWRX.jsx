import ProjectWRXPicture from '../assets/ProjectWRXhome.png'
import Mongodb from '../assets/Icons/icons8-mongodb-96.png'
import Nodejs from '../assets/Icons/icons8-node-js-96.png'
import Express from '../assets/Icons/icons8-express-js-96.png'
import ReactJS from '../assets/Icons/icons8-react-80 (1).png'
import WRX from '../assets/ProjectPictures/projectwrx.gif'

export default function ProjectWRX () {
    return (
        <div className='box myslide'>
            <div className="row">
                <div className="col-8">
                    <div className="row">
                        <h1>ProjectWRX</h1>
                        <h3>Project Management Application</h3>
                    </div>
                    <div className="row">
                        <p>We live in a fast-paced world where managing multiple tasks and coordinating teams can become overwhelming and chaotic. It's easy to lose track of project progress, deadlines, and who's responsible for what. We recognized this challenge and created ProjectWRX to simplify project management and streamline collaboration.</p>
                    </div>
                    <div className="row center">
                        <p>Built with:</p>
                        <img src={Mongodb} alt="MongoDB" className="myicon"/>
                        <img src={Express} alt="Express" className="myicon"/>
                        <img src={ReactJS} alt="ReactJS" className="myicon"/>
                        <img src={Nodejs} alt="NodeJS" className="myicon"/>
                    </div>
                    <div className="row">
                        <h3><a href="https://projectwrx.netlify.app/" target="_blank">Website</a></h3>
                        <h3><a href="https://github.com/sunder96u/ProjectWRX-Front" target="_blank">Front-end Code</a></h3>
                        <h3><a href="https://github.com/sunder96u/ProjectWRX-Back" target="_blank">Back-end Code</a></h3>
                    </div>
                </div>
                <div className="col-4">
                    <div className="row">
                        <img src={WRX} alt="ProjectWRX gif" />
                    </div>
                </div>   
            </div>
        </div>
    )
}