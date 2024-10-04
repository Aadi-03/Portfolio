import './Secondpage.css';
import person from '../../images/person.jpg'

const Secondpage = () => {
        return (
                <div className="secondpage">
                        <div className="profile-image">
                                <img src={person} alt="" className="myimage" />
                        </div>
                        <div className="about">
                                <div className="about-container">

                                        <div className="line-container">
                                                <h1>About Me</h1>
                                                <div className="line">
                                                </div>
                                        </div>
                                        <div className="wrapper">
                                                <p className="line__1">I’m a dedicated software engineer with a passion for crafting seamless</p>
                                                <p className="line__2">digital experiences. My journey in tech began with a curiosity for how </p>
                                                <p className="line__3">things work, and it has evolved into a love for designing and building </p>
                                                <p className="line__4"> robust applications. I specialize in Frontend Development, Machine </p>
                                                <p className="line__5">Learning, Artificial Intelligence, and I’m always exploring new  </p>
                                                <p className="line__6"> technologies to enhance my skill set. When I’m not coding, you’ll find</p>
                                                <p className="line__7"> me tinkering with side projects or playing table tennis. I thrive in </p>
                                                <p className="line__8">collaborative environments and believe that every line of code tells</p>
                                                <p className="line__9"> a story. </p>
                                                <p className="line__10" style={{fontSize:"25px" , color:"#2AD87F"}}>Let’s connect and create something extraordinary together!</p>

                                        </div>

                                        <div className="buttons">
                                                <a className='btn1' href="mailto:aaditvavijayvats.sre2022@gmail.com">Hire me</a>
                                                <a className="btn2" href="https://drive.google.com/file/d/1qJXEkFdN-vBObSMeS-B6ycCw019-NICj/view?usp=drive_link"
                                                        download="Aaditva Vijay Vats Resume" target="_blank">Resume</a>
                                        </div>
                                </div>
                        </div>

                </div>
        );
}

export default Secondpage;
