import "./Hero.css";
import { ReactComponent as SelfEmoticon } from "./../../logos/selfEmoticon.svg";
import Menu from "./Menu";


const Hero = () => {
  return (
    <div className="main">
      <Menu />
      <div className="selfLogo">
        <SelfEmoticon />
      </div>
      <div>
        <div className="firstContent">Hi, I’m Ankit Srivastava.</div>
        <div className="secondContent">I’m a Software Developer.</div>
      </div>
    </div>
  );
};

export default Hero;
