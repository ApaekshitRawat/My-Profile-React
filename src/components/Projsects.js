import {
  BiCubeAlt,
  BiDirections,
  BiHide,
  BiGhost,
  BiSidebar,
  BiShoppingBag,
} from "react-icons/bi";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { TfiLayoutSlider } from "react-icons/tfi";
import { FaCcStripe } from "react-icons/fa";
import Tooltip from "./Tooltip";
const Projsects = () => {
  return (
    <div className="projectIcons">
      <Tooltip
        content="A menu with the functionality of filters"
        direction="top"
      >
        <a href="https://freakmenu.netlify.app/">
          <BiCubeAlt size={"50px"} />
        </a>
      </Tooltip>
      <Tooltip
        content="A travel company page feturing its services"
        direction="top"
      >
        <a href="https://freak-travells.netlify.app">
          <BiDirections size={"50px"} />
        </a>
      </Tooltip>
      <Tooltip
        content="A bootstrap page for selling Anime merchs"
        direction="top"
      >
        <a href="https://freak-merchs.netlify.app/">
          <BiHide size={"50px"} />
        </a>
      </Tooltip>
      <Tooltip content="Color Generator" direction="top">
        <a href="https://freak-color-generator.netlify.app/">
          <BiGhost size={"50px"} />
        </a>
      </Tooltip>
      <Tooltip
        content="A handy app for writing down your groceries"
        direction="top"
      >
        <a href="https://freak-grocery.netlify.app/">
          <MdOutlineLocalGroceryStore size={"50px"} />
        </a>
      </Tooltip>

      <Tooltip content="Sidear and Modal component" direction="top">
        <a href="https://freak-sidebar-modal.netlify.app/">
          <BiSidebar size={"50px"} />
        </a>
      </Tooltip>
      <Tooltip content="A cool slider" direction="top">
        <a href="https://freak-slider.netlify.app/">
          <TfiLayoutSlider size={"50px"} />
        </a>
      </Tooltip>
      <Tooltip
        content="Immitation of Stripe Navbar functionality "
        direction="top"
      >
        <a href="https://freak-stripe-menu.netlify.app/">
          <FaCcStripe size={"50px"} />
        </a>
      </Tooltip>
      <Tooltip content="Cart !!" direction="top">
        <a href="https://freak-cart.netlify.app/">
          <BiShoppingBag size={"50px"} />
        </a>
      </Tooltip>
    </div>
  );
};
export default Projsects;
