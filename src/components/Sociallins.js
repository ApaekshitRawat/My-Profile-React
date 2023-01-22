import { FaLinkedin, FaInstagramSquare, FaGithub } from "react-icons/fa";
import { sociallinks } from "../data";
const Sociallins = () => {
  return (
    <div className="icons">
      <a href="https://www.linkedin.com/in/apaekshit-rawat-7339771ab/">
        <FaLinkedin size={"2rem"} />
      </a>
      <a href="https://github.com/ApaekshitRawat">
        <FaGithub size={"2rem"} />
      </a>
      <a href="https://www.instagram.com/apaekshit/">
        <FaInstagramSquare size={"2rem"} />
      </a>
    </div>
  );
};
export default Sociallins;
