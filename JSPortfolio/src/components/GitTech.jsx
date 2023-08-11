import CSS from '../assets/Icons/icons8-css-96.png'
import HTML from '../assets/Icons/icons8-html5-96.png'
import JS from '../assets/Icons/icons8-javascript-96 (1).png'
import Mongodb from '../assets/Icons/icons8-mongodb-96.png'
import Express from '../assets/Icons/icons8-express-js-96.png'
import Nodejs from '../assets/Icons/icons8-node-js-96.png'
import Tech from '../assets/ProjectPictures/gittech.gif'


export default function GitTech () {
    return (
        <div className='box myslide col-10'>
            <div className="row">
                <div className="col-md-4 col-sm-12">
                    <div className="row">
                        <img src={Tech} alt="GitTech gif" />
                    </div>
                </div>
                <div className="col-md-8 col-sm-12">
                    <div className="row">
                        <h1>GitTech</h1>
                        <h3>Social Media Application</h3>
                    </div>
                    <div className="row">
                        <p>A social media platform built entirely in JavaScript.</p>
                    </div>
                    <div className="row center">
                        <p>Built with:</p>
                        <img src={CSS} alt="CSS" className="myicon"/>
                        <img src={HTML} alt="HTML" className="myicon"/>
                        <img src={JS} alt="JavaScript" className="myicon"/>
                        <img src={Express} alt="Express" className="myicon"/>
                        <img src={Mongodb} alt="MognoDB" className="myicon"/>
                        <img src={Nodejs} alt="NodeJS" className="myicon"/>
                    </div>
                    <div className="row">
                        <h3><a href="https://sunder96u.github.io/GitTech/client/" target="_blank">Website</a></h3>
                        <h3><a href="https://github.com/sunder96u/GitTech" target="_blank">Code</a></h3>
                    </div>
                </div>   
            </div>
        </div>
    )
}