import { BiCubeAlt, BiDirections, BiHide, BiGhost } from "react-icons/bi";

const Projsects = () => {
  return (
    <div className="projectIcons">
      <a href="https://freakmenu.netlify.app/">
        <BiCubeAlt size={"50px"} />
      </a>
      <a href="https://freak-travells.netlify.app">
        <BiDirections size={"50px"} />
      </a>
      <a href="https://freak-merchs.netlify.app/">
        <BiHide size={"50px"} />
      </a>
      <a href="https://freak-color-generator.netlify.app/">
        <BiGhost size={"50px"} />
      </a>
    </div>
  );
};
export default Projsects;
