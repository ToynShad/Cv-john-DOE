import { useEffect } from "react"

import RealisationsCard from "../Components/RealisationCard"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Realisations () {
    useEffect(() => {
        document.title = "Mes réallisations - John Doe"
    })

    return (
        <div>
            <div className="container-fluid banner"></div>
            <div className="container-bloc">           
            <div className="container-text">
                <h1 className="text-uppercase">Portfolio</h1>
                <p>Voici quelques-unes de mes réalisations</p>
                <div className='border-bottom w-25 m-auto border-3' style={{"--bs-border-color": "#0d6efd"}}></div>
            </div>
                <div className="my-3">
                    <RealisationsCard/>
                </div>
            </div>
        </div>
    )
}