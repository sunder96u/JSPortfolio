import Bootstrap from '../assets/Icons/icons8-bootstrap-96.png'
import CS from '../assets/Icons/icons8-c-96.png'
import CSS from '../assets/Icons/icons8-css-96.png'
import HTML from '../assets/Icons/icons8-html5-96.png'
import Budget from '../assets/ProjectPictures/financialapp.gif'


export default function BudgetPlanner () {
    return (
        <div className='box myslide'>
            <div className="row">
                <div className="col-4">
                    <div className="row">
                        <img src={Budget} alt="Budget planning gif" />
                    </div>
                </div>
                <div className="col-8">
                    <div className="row">
                        <h1>Budget Planner</h1>
                        <h3>Budget Planning Application</h3>
                    </div>
                    <div className="row">
                        <p>write a quick blurb</p>
                    </div>
                    <div className="row center">
                        <p>Built with:</p>
                        <img src={Bootstrap} alt="Bootstrap" className="myicon"/>
                        <img src={CS} alt="C#" className="myicon"/>
                        <img src={CSS} alt="CSS" className="myicon"/>
                        <img src={HTML} alt="HTML" className="myicon"/>
                    </div>
                    <div className="row">
                        <h3><a href="https://github.com/sunder96u/BudgetPlanner" target="_blank">App Code</a></h3>
                        <h3><a href="https://github.com/sunder96u/FinancialAPI" target="_blank">API Code</a></h3>
                    </div>
                </div>   
            </div>
        </div>
    )
}