import Me from '../assets/Me!.jpeg'



export default function About () {
    return (
        <div className='box col-10'>
            <div className="row align-middle">
                <div className="col-4">
                    <div className="row">
                        <h1>Hello, I am Steven Underwood</h1>
                        <img className="img-fluid roundFrame" src={Me} alt='The worlds most handsome person!' />
                    </div>
                </div>
                <div className="col-8">
                    <div className="row">
                        <h1> </h1>
                        <p>Dedicated Software Engineer: Known for my strong work ethic, I am a driven and detail-oriented software engineer. I consistently strive for excellence in my work, paying meticulous attention to quality and efficiency. With a passion for coding and problem-solving, I am always eager to tackle new challenges and stay abreast of the latest advacements in technology.</p>
                        <p>Management Experience: With a background in management, I possess valuable leadership skills that complement my technical expertise. I have successfully led teams, coordinated projects, and fostered collaboration to drive organizational success.</p>
                        <p>Motorsports Enthusiast and Experienced Racer: Combining my love for motorsports with hands-on experience, I have actively participated in racing events. This passion has not only shaped my competitive spirit but also cultivated my ability to perform well under pressure, think critically, and adapt quickly to changing circumstances.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}