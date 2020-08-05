import React from "react"
import "./About.css"

const About = (props) => {
    console.log(props)
    return (
        <div className="about__container">
            <span>
                About this page : I built it because I love movies.
                About this page : I built it because I love movies.
            </span>
            <span>- George Orwell, 1940</span>
        </div>
    )
}

export default About
