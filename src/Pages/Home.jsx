import "../Css/Home.css"
import { useEffect } from 'react'

import Head from "../Components/Head"
import About from "../Components/About"

export default function Home() {
    useEffect(() => {
        document.title = "Portfolio - John Doe"
    })

    return(
        <div>
            <Head/>
            <About/>
        </div>
    )
}