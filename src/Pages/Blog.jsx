import { useEffect } from "react"

import BlogCard from "../Components/BlogCard"
import '../Css/Blog.css'


export default function Blog () {
    useEffect(() => {
        document.title = "Mon blog - John Doe"
    })

    return (
        <div>
            <div className="container-fluid banner"></div>
            <div className="container-bloc">
                <div className="container-text-about">
                    <h1 className="text-uppercase">blog</h1>
                    <p>Retrouvez ici quelques articles sur le développement web.</p>
                    <div className='border-bottom w-25 m-auto border-3' style={{"--bs-border-color": "#0d6efd"}}></div>
                </div>

                <div className="my-3">
                    <BlogCard/>
                </div>
            </div>
        </div>
    )
}