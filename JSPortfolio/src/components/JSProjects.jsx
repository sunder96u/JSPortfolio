import JSMario from './JSMario'
import GitTech from './GitTech'
import ProjectWRX from './ProjectWRX'
import Capstone from './Capstone'



export default function JSProjects () {
    return (
        <>
            <div className="slide">
                <h1>JSProj slide 1</h1>
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