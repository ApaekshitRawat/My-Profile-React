import { FaDownload } from "react-icons/fa";
import Tooltip from "./Tooltip";
const Resumesection = () => {
  return (
    <Tooltip content="Click to Download my Resume" direction="right">
      <div className="resumeSection">
        <FaDownload className="download" />
        <a href="resume.pdf" download="resume.pdf">
          Resume
        </a>
      </div>
    </Tooltip>
  );
};
export default Resumesection;
