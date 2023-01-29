import "./About.css";
import { ReactComponent as HtmlLogo } from "./../../logos/htmlLogo.svg";
import { ReactComponent as CssLogo } from "./../../logos/cssLogo.svg";
import { ReactComponent as JsLogo } from "./../../logos/jsLogo.svg";
import { ReactComponent as ReactLogo } from "./../../logos/reactLogo.svg";

const About = () => {
  return (
    <div className="main">
      <div className="heading">About Me</div>
      <div className="aboutSection">
        I am a highly motivated and skilled Front-End Developer with over 5
        years of experience in creating and implementing visually stunning and
        user-friendly websites and web applications. I have a strong background
        in HTML, CSS, JavaScript, and jQuery, and am proficient in a variety of
        front-end frameworks such as React and Angular. I have experience with
        responsive design and have a keen eye for detail when it comes to
        creating visually appealing and functional user interfaces. I am a team
        player and enjoy collaborating with designers, developers and project
        managers to create innovative solutions. I am always eager to learn new
        technologies and stay up-to-date with the latest industry trends
      </div>
      <div className="skills">
        <div className="skillsBox">
          <div className="skillsHeading">Skills</div>
          <div className="skillsSection">
            <HtmlLogo />
            <CssLogo />
            <JsLogo />
            <ReactLogo />
          </div>
          <div>
            <div className="lineOne"></div>
            <div className="lineTwo"></div>
            <div className="lineThree"></div>
            <div className="lineFour"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
