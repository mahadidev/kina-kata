import {
  AiOutlineShoppingCart, 
  AiOutlineMobile, 
  AiOutlineLogin, 
  AiOutlineMenu, 
  AiOutlineClose, 
  AiOutlineShopping, 
  AiOutlineHeart, 
  AiOutlinePlus, 
  AiOutlineMinus
} from "react-icons/ai";
import { BsCartPlus, BsCartCheck, BsCpu, BsArrowRight, BsStar, BsStarHalf, BsStarFill} from "react-icons/bs";
import { RiHeartAddLine } from "react-icons/ri";
import { GiBattery25 } from "react-icons/gi";
import { ImConnection } from "react-icons/im";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Icons = {
  cartIcon: <AiOutlineShoppingCart />,
  cartAddIcon: <BsCartPlus />,
  cartAddedIcon: <BsCartCheck />,
  loginIcon: <AiOutlineLogin />,
  menuIcon: <AiOutlineMenu />,
  closeIcon: <AiOutlineClose />,
  shopIcon: <AiOutlineShopping />,
  wishlistIcon: <AiOutlineHeart />,
  wishlistAddIcon: <RiHeartAddLine />,
  mobileIcon: <AiOutlineMobile />,
  cpuIcon: <BsCpu />,
  batteryIcon: <GiBattery25 />,
  wifiIcon: <ImConnection />,
  arrowLongRightIcon: <BsArrowRight />,
  arrowShortLeftIcon: <IoIosArrowBack />,
  arrowShortRightIcon: <IoIosArrowForward />,
  starOutline: <BsStar />,
  starHalf: <BsStarHalf />,
  starFull: <BsStarFill />,
  plusIcon: <AiOutlinePlus />,
  minusIcon: <AiOutlineMinus />,
}

export default Icons;