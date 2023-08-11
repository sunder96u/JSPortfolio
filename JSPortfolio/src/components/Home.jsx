import HomeImg from '../assets/Home_Picture-removebg-preview.png'




export default function Home () {
    return (
        <div className='box col-10'>
            <div className='row'>
                <div className='col-md-6 col-sm-12'>
                    <img src={HomeImg} className="img-fluid" />
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="row">
                        <h1>Full-Stack Software Engineer</h1>
                    </div>
                    <div className="row">
                        <p>I am a Software Engineer with leadership experience skilled in team building, process implementation, and business development. I bring a powerful blend of technical experience and strategic leadership to deliver exceptional results. With a proven track record of successfully managing cross-functional teams and driving innovation, I am dedicated to creating cutting-edge software solutions that propel businesses forward.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}