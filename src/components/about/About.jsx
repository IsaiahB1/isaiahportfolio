import "./about.css"
import Presenting from "../../components/img/presenting.png"
import Award from "../../components/img/award.png"

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={Presenting} alt="" className="a-img"/>
                </div>
            </div>
            <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">
                It is a long established fact that a reader will be distracted by the
                readable content so here is a biography of Isaiah Barnett.
            </p>
            <p className="a-desc">
                Isaiah Barnett is a Software Engineer based out of Arlington, Virginia.
                He is a full stack developer with a passion for building web applications.
                He is from the great southern state of Mississippi.
                He graduated from Jackson State University with a Bachelor degree in Computer Science.
            </p>
            <div className="a-award">
                <img src={Award} alt="" className="a-award-img"/>
                <div className="a-award-texts">
                <h4 className="a-award-title">Career Accomplishments</h4>
            <p className="a-award-desc">
              While during a summer internship at the University of Massachusetts in Amherst, he created a computational model using different words and phrases in “Mainstream English” and
                “African-American Vernacular” with Python and Twitter API to show disparities in Part of Speech
                tagger
            </p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default About