import JQuery from '../assets/Icons/icons8-jquery-100.png'


export default function JSMario () {
    return (
        <div className="row">
             <div className="col">
                <div className="row">
                    <h3>Web Browser Game</h3>
                    <h2>JSMario</h2>
                </div>
                <div className="row">
                    <p>A randomly generating Mario Runner game.</p>
                </div>
                <div className="row">
                    <p>Built with:</p>
                    <img src={JQuery} alt="JQuery" className="myicon"/>
                </div>
                <div className="row">
                    <p><a>Website</a></p>
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