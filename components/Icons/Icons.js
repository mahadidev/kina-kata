import {
	AiOutlineClose,
	AiOutlineHeart,
	AiOutlineLogin,
	AiOutlineLogout,
	AiOutlineMenu,
	AiOutlineMinus,
	AiOutlineMobile,
	AiOutlinePlus,
	AiOutlineShopping,
	AiOutlineShoppingCart,
	AiOutlineUser,
} from 'react-icons/ai';
import {
	BsArrowRight,
	BsCartCheck,
	BsCartPlus,
	BsCpu,
	BsStar,
	BsStarFill,
	BsStarHalf,
} from 'react-icons/bs';
import { GiBattery25 } from 'react-icons/gi';
import { ImConnection } from 'react-icons/im';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { RiHeartAddLine } from 'react-icons/ri';

const Icons = {
	cartIcon: <AiOutlineShoppingCart />,
	cartAddIcon: <BsCartPlus />,
	cartAddedIcon: <BsCartCheck />,
	loginIcon: <AiOutlineLogin />,
	logOutIcon: <AiOutlineLogout />,
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
	userIcon: <AiOutlineUser />,
};

export default Icons;
