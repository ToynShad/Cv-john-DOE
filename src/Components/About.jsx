import React from 'react';
import aboutImg from "../Img/john-doe-about.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/About.css';

function About() {
    return (
        <div id="About" className="container mt-4">
            <div className="row">
                <div className="col-12 col-md-6 mb-4 mb-md-0">
                    <div className="about-container shadow p-4 bg-white">
                        <h3 className="about-title">À propos</h3>
                        <p>
                            Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation d'
                            <strong> intégrateur-développeur web</strong> au CEF. Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du
                            <strong> développement web</strong>.
                        </p>
                        <p>
                            Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de
                            <strong> développeur web full stack</strong>.
                        </p>
                        <p>J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.</p>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="skills-container shadow p-4 bg-white">
                        <img src={aboutImg} alt="Développeur" className="about-img mb-3" />
                        <h3 className="skills-title">Mes compétences</h3>
                        <SkillBar skill="HTML5" percentage={90} colorClass="bg-danger" />
                        <SkillBar skill="CSS3" percentage={80} colorClass="bg-info" />
                        <SkillBar skill="JAVASCRIPT" percentage={70} colorClass="bg-warning" />
                        <SkillBar skill="PHP" percentage={60} colorClass="bg-success" />
                        <SkillBar skill="REACT" percentage={50} colorClass="bg-primary" />
                    </div>
                </div>
            </div>
        </div>
    );
}

const SkillBar = ({ skill, percentage, colorClass }) => (
    <div className="skill-bar mb-3">
        <p className="mb-1 fw-bold">{skill} {percentage}%</p>
        <div className="progress">
            <div
                className={`progress-bar ${colorClass}`}
                role="progressbar"
                style={{ width: `${percentage}%` }}
                aria-valuenow={percentage}
                aria-valuemin="0"
                aria-valuemax="100"
            ></div>
        </div>
    </div>
);

export default About;