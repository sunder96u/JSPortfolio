import BugTracker from './BugTracker'
import BudgetPlanner from './BudgetPlanner'
import WeatherApp from './WeatherApp'
import CS from '../assets/Icons/icons8-c-96.png'



export default function CSProjects () {
    return (
        <>
            <div className='slide'>
                <img src={CS} alt="CS logo" />
                <h2>Based Projects</h2>
                <h3>&larr; Swipe &rarr;</h3>
            </div>
            <div className="slide">
                <BugTracker />
            </div>
            <div className="slide">
                <BudgetPlanner />
            </div>
            <div className="slide">
                <WeatherApp />
            </div>
        </>

    )
}