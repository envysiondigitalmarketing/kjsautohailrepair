import { Link, NavLink, useLocation } from "react-router-dom"
import Logo from "../../assets/Logo.webp"
import { BiMenuAltRight } from "react-icons/bi";
import { useEffect, useState, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5"
import { BsMailbox2, BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from 'react-icons/md';
import useClickOutsideDetector from "../../Hooks/useClickOutsideDetector"
import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkedAlt } from "react-icons/fa";

const NavBar = () => {
    const [sticky, setSticky] = useState("static")

    const [show, setShow] = useState(false);

    const menuRef = useRef();

    useClickOutsideDetector(menuRef, () => {
        setShow(false)
    })

    const textAndBorder = (page) => 
        page === '/Contact' || page === '/Blog' ? "text-black" : "text-white";
        
    const location = useLocation();

    return (
        <nav className={`h-max duration-500  flex justify-center items-center w-full  top-0 left-0 z-20  text-black  flex-col py-2`}>
            <div className={` w-11/12 mx-auto mb-5 flex items-center justify-between gap-x-6 border-b pb-2 flex-wrap gap-y-3 sm:justify-center ${textAndBorder(location.pathname)}`}>
                <div className="w-max flex gap-x-3 flex-wrap sm:justify-center ">

                    {/* <div className="flex items-center gap-x-2 ">
                        <span className="text-lg"><IoLocationSharp /></span>
                        <span>1670 Paonia St Suite 120 Colorado Springs, CO 80915</span>
                    </div> */}
                    <div className="flex items-center gap-x-2 ">
                        <span className="text-lg"><BsTelephoneFill /></span>
                        <a href="tel:214-766-6176">(214) 766-6176</a>
                    </div>
                    <div className="flex items-center gap-x-2 ">
                        <span className="text-lg"><MdEmail /></span>
                        <a href='mailto:contact@kjsautohailrepair.com'>contact@kjsautohailrepair.com</a>
                    </div>
                </div>
                <div className="flex gap-x-5 pr-4">
                    <a href="https://www.facebook.com/kjsautohailrepair" className=" text-xl " target="_blank" rel="noopener noreferrer">
                        <FaFacebook />
                    </a>
                    <a href="https://www.instagram.com/kjsautohailrepair" className=" text-xl " target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://maps.app.goo.gl/V9e4i9mBBJT2ZiPW8" className=" text-xl " target="_blank" rel="noopener noreferrer">
                        <FaMapMarkedAlt />
                    </a>
                    {/* <span className=" text-xl ">
                        <FaTwitter />
                    </span> */}
                </div>
            </div>
            <div className="w-11/12 flex justify-between items-center sm:gap-x-10">
                <div className="w-max">
                    <Link to={"/"}>
                        <img src={Logo} alt="Header logo" className="h-20 sm:object-scale-down" loading='lazy'/>
                    </Link>
                </div>
                {/*  */}
                <div className={`w-5/12 lg:w-9/12  lg:pl-7 md:p-0 md:fixed md:top-0 md:left-0 md:h-full  overflow-hidden  md:bg-white  duration-300 z-40  ${show ? "md:w-[250px]" : "md:w-0"}`} ref={menuRef}>
                    {show &&
                        <div className="bg-gray-300 h-[130px] hidden  md:flex justify-center items-center">

                            <Link to={"/"}>
                                <img src={Logo} alt="Header logo" className="w-full h-10 sm:object-scale-down" loading='lazy'/>
                            </Link>
                        </div>
                    }
                    <ul className={`float-right flex items-center  justify-evenly h-full md:h-4/5 w-10/12 lg:w-full text-lg md:flex-col ${location.pathname === "/Contact" || location.pathname === "/Blog" ? "text-black " : "text-white md:text-black"}`}>
                        <li className="">
                            <NavLink to={"/"} onClick={() => setShow(false)} className={({ isActive }) =>
                                (isActive
                                    ? `md:bg-[#f79f24] md:py-4 md:px-9  md:rounded-md md:text-black text-[#f79f24]`
                                    : "") + " hover:text-[#f79f24] md:hover:text-black duration-150 "
                            } >Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/Service"} onClick={() => setShow(false)} className={({ isActive }) =>
                                (isActive
                                    ? "md:bg-[#f79f24] md:py-4 md:px-9  md:rounded-md md:text-black text-[#f79f24]"
                                    : "") + " hover:text-[#f79f24] md:hover:text-black duration-150 "
                            } >Service</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/Contact"} onClick={() => setShow(false)} className={({ isActive }) =>
                                (isActive
                                    ? "md:bg-[#f79f24] md:py-4 md:px-9  md:rounded-md md:text-black text-[#f79f24]"
                                    : "") + " hover:text-[#f79f24] md:hover:text-black duration-150 "
                            } >Contact Us</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/Blog"} className={({ isActive }) =>
                                (isActive
                                    ? "text-[#f79f24]"
                                    : "") + " hover:text-[#f79f24] duration-150 "
                            } >Blog</NavLink>
                        </li>
                        {/* <li>
                            <NavLink to={"/Review"} className={({ isActive }) =>
                                (isActive
                                    ? "text-[#f79f24]"
                                    : "") + " hover:text-[#f79f24] duration-150 "
                            } >Leave Review</NavLink>
                        </li> */}
                    </ul>
                </div>
                <div className="hidden md:block">
                    <button className={`${location.pathname === "/Contact" || location.pathname === "/Blog" ? "text-black" : "text-white"}  text-3xl`} onClick={() => setShow(!show)}>
                        {show ?
                            <IoClose />
                            :
                            <BiMenuAltRight />
                        }
                    </button>
                </div>
            </div>

        </nav>
    )
}

export default NavBar