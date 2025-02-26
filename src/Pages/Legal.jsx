import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMobileScreenButton, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Legal() {
    useEffect(() => {
        document.title = "Mention Legal - John Doe";
        // Fonction pour désindexer la page
        const desindexerPage = () => {
            const metaRobots = document.createElement('meta');
            metaRobots.name = 'robots';
            metaRobots.content = 'noindex, nofollow';
            document.head.appendChild(metaRobots);
        };

        // Appeler la fonction pour désindexer la page
        desindexerPage();

        // Fonction de nettoyage pour supprimer la balise meta lors du démontage du composant
        return () => {
            const metaRobots = document.querySelector('meta[name="robots"]');
            if (metaRobots) {
                document.head.removeChild(metaRobots);
            }
        };
    }, []);

    return (
        <div className="container-mt-5">
            <div className="row justify-content-center">
                <div className="col-md-12 text-center">
                    <h1 className="text-uppercase">Mentions Légales</h1>
                    <div className='border-bottom w-50 mx-auto' style={{ "--bs-border-color": "#0d6efd", "borderWidth": "3px" }}></div>
                </div>
            </div>

            <div className="row justify-content-center mb-4 w-100 m-auto mt-4">
                <div className="col-md-6">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Editeur du site
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <h3>John Doe</h3>
                                    <address>
                                        <p><FontAwesomeIcon icon={faLocationDot} /> 40 Rue Laure Diebold <br />69009 Lyon, France</p>
                                        <p><FontAwesomeIcon icon={faMobileScreenButton} /><a href='tel:0620304050' style={{ color: "#0d6efd" }}> 06 20 30 40 50</a></p>
                                        <p><FontAwesomeIcon icon={faEnvelope} /><a href='mailto:john.doe@gmail.com' style={{ color: "#0d6efd" }}> john.doe@gmail.com</a></p>
                                    </address>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Hébergeur
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <h3>Always Data</h3>
                                    <address>
                                        <p>91 rue du Faubourg Saint Honoré<br />75008 Paris, France</p>
                                        <p><FontAwesomeIcon icon={faGlobe} /><a href='https://www.alwaysdata.com' style={{ color: "#0d6efd" }}> www.alwaysdata.com</a></p>
                                    </address>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Crédits
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <h3>Crédits</h3>
                                    <p>Site développé par John Doe, étudiant du CEF.</p>
                                    <p>Les images libres de droit sont issues du site <a href='https://pixabay.com/fr/' style={{ color: "#0d6efd" }}>Pixabay</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}