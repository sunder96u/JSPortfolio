import JSMario from './JSMario'
import GitTech from './GitTech'
import ProjectWRX from './ProjectWRX'
import Capstone from './Capstone'
import JS from '../assets/Icons/icons8-javascript-96 (1).png'



export default function JSProjects () {
    return (
        <>
            <div className="slide">
                <img src={JS} alt="JS logo" />
                <h2>Based Projects</h2>
                <h3>&larr; Swipe &rarr;</h3>
            </div>
            <div className="slide">
                <JSMario />
            </div>
            <div className="slide">
                <GitTech />
            </div>
            <div className="slide">
                <ProjectWRX />
            </div>
            <div className="slide">
                <Capstone />
            </div>
        </>
    )
}