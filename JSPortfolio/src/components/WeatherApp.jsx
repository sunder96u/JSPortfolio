import Bootstrap from '../assets/Icons/icons8-bootstrap-96.png'
import CS from '../assets/Icons/icons8-c-96.png'
import CSS from '../assets/Icons/icons8-css-96.png'
import HTML from '../assets/Icons/icons8-html5-96.png'
import Xamarin from '../assets/Icons/icons8-xamarin-96.png'

export default function WeatherAPP () {
    return (
        <div className="row">
            <div className="col">
                <div className="row">
                    <h3>Weather Viewer Application</h3>
                    <h2>Weather App</h2>
                </div>
                <div className="row">
                    <p>Quick blurb about this</p>
                </div>
                <div className="row">
                    <p>Built with:</p>
                    <img src={Bootstrap} alt="Bootstrap" className="myicon"/>
                    <img src={CS} alt="C#" className="myicon"/>
                    <img src={CSS} alt="CSS" className="myicon"/>
                    <img src={HTML} alt="HTML" className="myicon"/>
                    <img src={Xamarin} alt="Xamarin" className="myicon"/>
                </div>
                <div className="row">
                    <p><a>Code</a></p>
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