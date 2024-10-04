import "./Fourthpage.css";
import { useState } from "react";

import C from '../../images/languages/C.png'
import Cplusplus from '../../images/languages/C++.png'
import Python from '../../images/languages/Python.png'
import Javascript from '../../images/languages/Javascript.png'
import HTML from '../../images/languages/Html.png'
import Java from '../../images/languages/JAva.png'
import Css from '../../images/languages/Css.png'
import Vscode from '../../images/languages/Vscode.png'
import Django from '../../images/languages/Django.jpg'
import googlefirebase from '../../images/languages/firebase.svg'
import Github from '../../images/languages/Github.png'
import mySql from '../../images/languages/Mysql.png'
import Reacts from '../../images/languages/React.png'
import Git from '../../images/languages/git.png'

const Fifthpage = () => {
        return (
                <div className="fifthpage">
                        <div className="container">
                                <div className="line-container">
                                        <h1>Technical Skills</h1>
                                        <div className="line"> </div>
                                </div>
                                <div className="certificates">
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
};
export default Fifthpage;