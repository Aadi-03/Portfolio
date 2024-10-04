import './Firstpage.css';
import person from '../../images/person2.png'

const Firstpage = () => {

        return (
                <div className='FirstPage'>
                        <div className='left'>
                                <div className="nameplate">
                                        <div className="container">
                                                <p>Hello 👋 I'm</p>
                                                <section className="animation">
                                                        <div className="first"><div>Aadivta Vijay Vats</div></div>
                                                        <div className="second"><div>Web Developer</div></div>
                                                        <div className="third"><div>Software Engineer</div></div>
                                                </section>
                                        </div>
                                        <a href='#About'>
                                                <p>About Me</p>
                                                <img className = "arrow" src="https://cdn-icons-png.flaticon.com/128/271/271226.png" alt="right-arrow" />
                                        </a>
                                </div>
                        </div>
                        <div className="right">
                                <div className="links">
                                        <p>Contact Me</p>
                                        <a href="mailto:aaditvavijayvats.sre2022@gmail.com" ><img src="https://cdn-icons-png.flaticon.com/128/6244/6244710.png" alt="gmail" /></a>
                                        <a href="https://wa.me/919027203505" target='_blank'><img src="https://cdn-icons-png.flaticon.com/128/1384/1384007.png" alt="whatsapp" /></a>
                                        <a href="https://www.linkedin.com/in/aaditva-vijay-vats-402644239" target='_blank'><img src="https://cdn-icons-png.flaticon.com/128/3669/3669739.png" alt="linkedin" /></a>
                                </div>

                        </div>
                        <img className="personal-image" src={person} alt="my image" />
                </div>
        )
}

export default Firstpage