import './Home.css';
import profile_image from "../../assets/images/Profile_image.jpg";
const Home = () => {
        return (
                <div className="home">
                        <div className="holder">
                                <div className="contacts">
                                        <div className="text">
                                                <h1>Hi,</h1>
                                                <h1>I am Aaditva Vijay</h1>
                                                <p>A passionate web developer and an enthusiastic student eager to explore the realms of AI and software development. Excited to innovate and create impactful digital solutions!</p>

                                        </div>
                                        <div className="contact-holder">
                                                <a href="https://github.com/Aadi-03" target="_blank"><img src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png"/></a>
                                                <a href="mailto:aaditvavijayvats.sre2022@gmail.com"><img src="https://cdn-icons-png.flaticon.com/128/5968/5968534.png"/></a>

                                                <a href="https://wa.me/919027203505" target="_blank"><img src="https://cdn-icons-png.flaticon.com/128/4423/4423697.png" /></a>

                                                <a href="https://www.linkedin.com/in/aaditva-vijay-vats-402644239" target="_blank"><img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" /></a>
                                                <a href=""><img src="https://cdn-icons-png.flaticon.com/128/5968/5968756.png"/></a>
                                        </div>

                                        <div className="buttons-holder">
                                                <a href="#Projects">See My Work</a>
                                                <a href="https://drive.google.com/file/d/1yjoWaJ5VF5n4OgKvEr30W7o8sgqwRKdu/view?usp=sharing" target="_blank">Resume</a>
                                        </div>

                                </div>
                                <div className="photo">
                                        <img src={profile_image} />

                                </div>
                        </div>
                </div>
        );
}

export default Home;