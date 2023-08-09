import Bootstrap from '../assets/Icons/icons8-bootstrap-96.png'
import CS from '../assets/Icons/icons8-c-96.png'
import CSS from '../assets/Icons/icons8-css-96.png'
import HTML from '../assets/Icons/icons8-html5-96.png'
import Xamarin from '../assets/Icons/icons8-xamarin-96.png'
import Weather from '../assets/ProjectPictures/weatherapp.gif'

export default function WeatherAPP () {
    return (
        <div className='box myslide col-10'>
            <div className="row">
                <div className="col-8">
                    <div className="row">
                        <h1>Weather App</h1>
                        <h3>Weather Viewer Application</h3>
                    </div>
                    <div className="row">
                        <p>Looking for the current weather in your area. Look no further than this handy app. Utilzing an API to get your local weather information.</p>
                    </div>
                    <div className="row center">
                        <p>Built with:</p>
                        <img src={Bootstrap} alt="Bootstrap" className="myicon"/>
                        <img src={CS} alt="C#" className="myicon"/>
                        <img src={CSS} alt="CSS" className="myicon"/>
                        <img src={HTML} alt="HTML" className="myicon"/>
                        <img src={Xamarin} alt="Xamarin" className="myicon"/>
                    </div>
                    <div className="row">
                        <h3><a href="https://github.com/sunder96u/WeatherApp" target="_blank">Code</a></h3>
                    </div>
                </div>  
                <div className="col-4">
                    <div className="row">
                        <img src={Weather} alt="weather app gif" />
                    </div>
                </div> 
            </div>
        </div>
    )
}