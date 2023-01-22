import { FaDownload } from "react-icons/fa";
const Resumesection = () => {
  return (
    <div className="resumeSection">
      <FaDownload className="download" />
      <a href="resume.pdf" download="resume.pdf">
        Resume
      </a>
    </div>
  );
};
export default Resumesection;
