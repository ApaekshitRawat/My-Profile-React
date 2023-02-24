import {
  BiCubeAlt,
  BiDirections,
  BiHide,
  BiGhost,
  BiSidebar,
} from "react-icons/bi";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { TfiLayoutSlider } from "react-icons/tfi";
import { FaCcStripe } from "react-icons/fa";
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
      <a href="https://freak-grocery.netlify.app/">
        <MdOutlineLocalGroceryStore size={"50px"} />
      </a>
      <a href="https://freak-sidebar-modal.netlify.app/">
        <BiSidebar size={"50px"} />
      </a>
      <a href="https://freak-slider.netlify.app/">
        <TfiLayoutSlider size={"50px"} />
      </a>
      <a href="https://freak-stripe-menu.netlify.app/">
        <FaCcStripe size={"50px"} />
      </a>
    </div>
  );
};
export default Projsects;
