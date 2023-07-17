import BugTracker from './BugTracker'
import BudgetPlanner from './BudgetPlanner'
import WeatherApp from './WeatherApp'



export default function CSProjects () {
    return (
        <>
            <div className='slide'>
                <h1>CSProject</h1>
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