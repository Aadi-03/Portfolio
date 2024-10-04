import './Education.css';

const Education = () => {
        return(
                <div className="education">
                        <div className="container">
                                <div className="line-container">
                                        <h1>Education</h1>
                                        <div className="line"> </div>
                                </div>
                                <div className="education-content">
                                        <img src="https://cdn-icons-png.flaticon.com/128/4379/4379086.png" alt="" className="aeroplane" />
                                        <div className="timeline"></div>
                                        <div className="details">
                                                <div className="ed-box">
                                                        <h1>HIGH SCHOOL</h1>
                                                        <ul>
                                                                <li>St. Mary's Academy, Saharanpur</li>
                                                                <li>2019</li>
                                                                <li>Scored 99%</li>
                                                                <li className='linked'><a href="https://drive.google.com/file/d/1dCaZrjSwfEMJmbPQuAAU7jdPCbD4TFQH/view" target='_blank'>Marksheet<img src="https://cdn-icons-png.flaticon.com/128/7268/7268615.png" alt="" className='link' /></a> </li>
                                                        </ul>

                                                </div>
                                                <div className="ed-box">
                                                        <h1>INTERMEDIATE</h1>
                                                        <ul>
                                                                <li>St. Mary's Academy, Saharanpur</li>
                                                                <li>2021</li>
                                                                <li>Scored 98.2%</li>
                                                                <li className='linked'><a href="https://drive.google.com/file/d/1BSOfv_YEWF1b4_OnI2zWcwU19Ks0BVqs/view" target='_blank'>Marksheet<img src="https://cdn-icons-png.flaticon.com/128/7268/7268615.png" alt="" className='link' /></a> </li>
                                                        </ul>

                                                </div>
                                                <div className="ed-box">
                                                        <h1>GRADUATION</h1>
                                                        <ul>
                                                                <li>Institute of Engineering & Technology, Lucknow</li>
                                                                <li>2021 - 2025</li>
                                                                <li>CGPA : 8.92</li>
                                                                <li className='linked'><a href="https://drive.google.com/file/d/1TqIkKeO9Ezkq9vm5YPK9XvhTMGhQyfAg/view?usp=drive_link" target='_blank'>Marksheet<img src="https://cdn-icons-png.flaticon.com/128/7268/7268615.png" alt="" className='link' /></a> </li>
                                                        </ul>
                                                </div>
                                        </div>
                                </div>
                        </div>        
                </div>
        )
}

export default Education;