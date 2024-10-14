import './Loadingpage.css';

const Home = () => {
        return (
                <div className="Loadingpage">
                        <div className="nameplate">
                                <h1 className='Greet'>Hi, I'm <span className="name">Aaditva Vijay</span></h1>
                                
                                <div className="container">
                                        <p>I do </p>
                                        <div className="profession">
                                                <h1 className='prof1'>Web Development</h1>
                                                <h1 className='prof2'>Software Development</h1>
                                                <h1 className='prof3'>Machine Learning</h1>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default Home;