import JQuery from '../assets/Icons/icons8-jquery-100.png'
import Mario from '../assets/ProjectPictures/mario.gif'


export default function JSMario () {
    return (
        <div className='box myslide col-10'>
            <div className="row">
                <div className="col-8">
                    <div className="row">
                        <h1>JSMario</h1>
                        <h3>Web Browser Game</h3>
                    </div>
                    <div className="row">
                        <p>How far can you run in this randomly generating Mario runner game? Put your jumping skills to the test as you avoid enemies and gaps. Utilizing JQuery, I created an almost endless Mario Runner game, unfortunetly canvas does have a max width so it cannot be fully endless.</p>
                    </div>
                    <div className="row center">
                        <p>Built with:</p>
                        <img src={JQuery} alt="JQuery" className="myicon"/>
                    </div>
                    <div className="row">
                        <h3><a href="https://sunder96u.github.io/JS-Mario/" target="_blank">Website</a></h3>
                        <h3><a href="https://github.com/sunder96u/JS-Mario" target="_blank">Code</a></h3>
                    </div>
                </div> 
                <div className="col-4">
                    <div className="row">
                        <img src={Mario} alt="Mario Runner gif" />
                    </div>
                </div>  
            </div>
        </div>
    )
}