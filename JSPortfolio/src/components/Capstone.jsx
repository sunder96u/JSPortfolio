import CSS from '../assets/Icons/icons8-css-96.png'
import HTML from '../assets/Icons/icons8-html5-96.png'
import Bootstrap from '../assets/Icons/icons8-bootstrap-96.png'
import ReactJS from '../assets/Icons/icons8-react-80 (1).png'
import Django from '../assets/Icons/icons8-django-100.png'
import Swift from '../assets/Icons/icons8-swift-96.png'
import Tech from '../assets/ProjectPictures/gittech.gif'
import myCapstone from '../assets/ProjectPictures/capstone.png'


export default function Capstone () {
    return (
        <div className='box myslide'>
            <div className="row">
                <div className="col-4">
                    <div className="row">
                        <img src={myCapstone} alt="GitTech gif" />
                    </div>
                </div>
                <div className="col-8">
                    <div className="row">
                        <h1>OneWheel OneRide</h1>
                        <h3>Ecommerce & Social Applications</h3>
                    </div>
                    <div className="row">
                        <p>Are you looking for new parts for your Onewheel? OneWheel OneRide is an eccmmerce site that allows the users to filter by model of Onewheel or by specific part type. It also includes a social platform where users can search for trails near them, or groups to float with. This is a multipiece project with a functional back-end and API, front-end, and IOS application. </p>
                    </div>
                    <div className="row center">
                        <p>Built with:</p>
                        <img src={CSS} alt="CSS" className="myicon"/>
                        <img src={HTML} alt="HTML" className="myicon"/>
                        <img src={Bootstrap} alt="Bootstrap" className="myicon"/>
                        <img src={Django} alt="Django" className="myicon"/>
                        <img src={ReactJS} alt="React" className="myicon"/>
                        <img src={Swift} alt="Swift" className="myicon"/>
                    </div>
                    <div className="row">
                        <h3><a href="https://github.com/sunder96u/OneWheelOneRide-Front" target="_blank">Front-End Code</a></h3>
                        <h3><a href="https://github.com/sunder96u/OneWheelOneRide-Back" target="_blank">Back-End Code</a></h3>
                        <h3><a href="https://github.com/sunder96u/OneWheelOneRide-IOS" target="_blank">IOS App Code</a></h3>
                    </div>
                </div>   
            </div>
        </div>
    )
}