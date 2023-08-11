import Bootstrap from '../assets/Icons/icons8-bootstrap-96.png'
import CS from '../assets/Icons/icons8-c-96.png'
import CSS from '../assets/Icons/icons8-css-96.png'
import HTML from '../assets/Icons/icons8-html5-96.png'
import Bug  from '../assets/ProjectPictures/bugtracker.gif'

export default function BugTracker () {
    return (
        <div className='box myslide col-10'>
            <div className="row">
                <div className="col-md-8 col-sm-12">
                    <div className="row">
                        <h1>Bug Tracker</h1>
                        <h3>Project Managment Application</h3>
                    </div>
                    <div className="row">
                        <p>Project management can be hard, figuring out who is doing what can be a nightmare. This bug tracker application can help by allowing the users to be assigned a different bug and mark when it is complete.</p>
                    </div>
                    <div className="row center">
                        <p>Built with:</p>
                        <img src={Bootstrap} alt="Bootstrap" className="myicon"/>
                        <img src={CS} alt="C#" className="myicon"/>
                        <img src={CSS} alt="CSS" className="myicon"/>
                        <img src={HTML} alt="HTML" className="myicon"/>
                    </div>
                    <div className="row">
                        <h3><a href="https://github.com/sunder96u/BugTracker" target="_blank">Code</a></h3>
                    </div>
                </div>  
                <div className="col-md-4 col-md12">
                    <div className="row">
                        <img src={Bug} alt="bugtracker gif"/>
                    </div>
                </div> 
            </div>
        </div>
    )
}