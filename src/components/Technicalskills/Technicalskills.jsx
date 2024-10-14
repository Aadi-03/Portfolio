import './Technicalskills.css';
import C from '../../assets/images/languages/C.png'
import Cplusplus from '../../assets/images/languages/C++.png'
import Python from '../../assets/images/languages/Python.png'
import Javascript from '../../assets/images/languages/Javascript.png'
import HTML from '../../assets/images/languages/Html.png'
import Java from '../../assets/images/languages/JAva.png'
import Css from '../../assets/images/languages/Css.png'
import Vscode from '../../assets/images/languages/Vscode.png'
import Django from '../../assets/images/languages/Django.jpg'
import googlefirebase from '../../assets/images/languages/firebase.svg'
import Github from '../../assets/images/languages/Github.png'
import mySql from '../../assets/images/languages/Mysql.png'
import Reacts from '../../assets/images/languages/React.png'
import Git from '../../assets/images/languages/git.png'
const Technicalskills = () => {

        return (
                <div className="Technicalskills">
                        <div className="container">
                                <h1>Technical Skills</h1>

                                <div className="languages">
                                        <figure>
                                                <img src={C} alt="" />
                                                <figcaption>C</figcaption>
                                        </figure>
                                        <figure>
                                                <img src={Cplusplus} alt="" />
                                                <figcaption>C++</figcaption>
                                        </figure>
                                        <figure>
                                                <img src={Python} alt="" />
                                                <figcaption>Python</figcaption>
                                        </figure>
                                        <figure>
                                                <img src={Java} alt="" />
                                                <figcaption>Java</figcaption>
                                        </figure>
                                        <figure>
                                                <img src={Javascript} alt="" />
                                                <figcaption>JavaScript</figcaption>
                                        </figure>
                                        <figure>
                                                <img src={HTML} alt="" />
                                                <figcaption>HTML</figcaption>
                                        </figure>
                                        <figure>
                                                <img src={Css} alt="" />
                                                <figcaption>CSS</figcaption>
                                        </figure>
                                        <figure>
                                                <img src={Reacts} alt="" />
                                                <figcaption>React</figcaption>
                                        </figure>
                                        <figure>
                                                <img src={Django} alt="" />
                                                <figcaption>Django</figcaption>
                                        </figure>
                                        <figure>
                                                <img src={mySql} alt="" />
                                                <figcaption>MySQL</figcaption>
                                        </figure>
                                        <figure>
                                                <img src={googlefirebase} alt="" />
                                                <figcaption>Firebase</figcaption>
                                        </figure>
                                        <figure>
                                                <img src={Git} alt="" />
                                                <figcaption>Git</figcaption>
                                        </figure>
                                        <figure>
                                                <img src={Github} alt="" />
                                                <figcaption>Github</figcaption>
                                        </figure>
                                        <figure>
                                                <img src={Vscode} alt="" />
                                                <figcaption>Vscode</figcaption>
                                        </figure>
                                </div>

                        </div>
                </div>
        );
}

export default Technicalskills;