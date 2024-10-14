import './Education.css';

const Education = () => {

        return (
                <div className="education">
                        <div className="container">
                                <h1>Education</h1>
                                <div className="education__content">
                                        <div className="education__item">
                                                <img src="https://www.stmaryssaharanpur.org/images/logo.png" />
                                                <h3>St. Mary's Academy, Saharanpur</h3>
                                                <p>High School</p>
                                                <p>2018 - 2019</p>
                                        </div>
                                        <div className="education__item">
                                                <img src="https://www.stmaryssaharanpur.org/images/logo.png" />
                                                <h3>St. Mary's Academy, Saharanpur</h3>
                                                <p>Intermediate</p>
                                                <p>2020 - 2021</p>
                                        </div>
                                        <div className="education__item">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/4/47/Ietlogo.png" />
                                                <h3>Institute of Engineering & Technology , Lucknow</h3>
                                                <p>B.Tech - Computer Science & Engineering - Artificial Intelligence</p>
                                                <p>2021 - 2025</p>
                                        </div>
                                </div>
                        </div>
                </div>
        );
}
export default Education;