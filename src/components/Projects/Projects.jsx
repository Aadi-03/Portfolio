import './Projects.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { useEffect, useState } from 'react';

const Projects = () => {

        const [projects, setProjects] = useState();
        const q = collection(db, 'Projects');

        useEffect(() => {
                const getProjects = async () => {
                        const data = await getDocs(q);
                        setProjects(data.docs.map(doc => doc.data()).sort((a, b) => a.priority - b.priority));
                }
                getProjects();

                return () => {
                        setProjects([]);
                }
        }, []);

        const handleAll = async () => {
                const data = await getDocs(q);
                setProjects(data.docs?.map(doc => doc.data()).sort((a, b) => a.priority - b.priority));
                const opt = document.querySelectorAll('.option');
                opt[2].classList.remove('active');
                opt[1].classList.remove('active');
                opt[0].classList.add('active');
        }
        const handleWeb = async () => {
                const data = await getDocs(q);
                setProjects(data.docs?.map(doc => doc.data()).filter(project => project.tech === 'Web').sort((a, b) => a.priority - b.priority));
                const opt = document.querySelectorAll('.option');
                opt[2].classList.remove('active');
                opt[0].classList.remove('active');
                opt[1].classList.add('active');
        }
        const handlePython = async () => {
                const data = await getDocs(q);
                setProjects(data.docs?.map(doc => doc.data()).filter(project => project.tech === 'Python').sort((a, b) => a.priority - b.priority));
                const opt = document.querySelectorAll('.option');
                opt[0].classList.remove('active');
                opt[1].classList.remove('active');
                opt[2].classList.add('active');
        }

        return (
                <div className="projects">
                        <div className="container">
                                <h1>Projects</h1>
                                <div className="option-menu">
                                        <div className="option active" onClick={handleAll}>All</div>
                                        <div className="option" onClick={handleWeb}>React</div>
                                        <div className="option" onClick={handlePython}>Python</div>
                                </div>
                                <div className="projects-container">
                                        {projects?.map((project, index) => (
                                                <figure key={index} >
                                                        <img className='projectimg' src={project.image} alt={project.image} />
                                                        <figcaption>{project.name}</figcaption>
                                                        <div className="links">
                                                                <a href={project.githublink} target='_blank'><img src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png" alt="" /></a>
                                                                {project.livelink && <a href={project.livelink} target='_blank'><img src="https://cdn-icons-png.flaticon.com/128/33/33783.png" alt="" /></a>}
                                                        </div>
                                                </figure>
                                        ))}
                                </div>
                        </div>
                        
                </div>
        );
}
export default Projects;