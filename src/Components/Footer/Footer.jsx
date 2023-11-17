import { BsFacebook, BsMailbox2 } from "react-icons/bs";
import Logo from "../../assets/FooterLogo.webp";
import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";
import { BiSolidTimeFive } from "react-icons/bi";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { MdEmail } from 'react-icons/md';
const Footer = () => {
    return (
        <>

            <footer className="bg-gray-200 py-5 ">
                <div className="flex justify-evenly items-start gap-x-4 mx-auto  flex-wrap px-3 sm:flex-col sm:items-start max-w-[1700px]">
                    <div className="flex justify-center flex-col sm:items-start">

                        <img src={Logo} alt="" className="w-4/12 h-20  object-contain" />
                        <p className="w-[300px] sm:w-9/12">Your Trusted Source for Hail Damage Solutions.</p>
                    </div>
                    <div className="pt-4">
                        <h4 className=" font-semibold mb-4">Helpful Links</h4>
                        <ul className="flex flex-col gap-y-3">
                            <li>
                                <Link to={"/"}>Home</Link>
                            </li>
                            <li>
                                <Link to={"/Contact"}>Contact</Link>
                            </li>
                            <li>
                                <Link to={"/Service"}>Service</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="pt-4">
                        <h4 className=" font-semibold mb-4 sm:mb-3">Contact Details</h4>
                        <div className=" flex flex-col gap-y-3 justify-center  md:w-full md:py-2 md:gap-y-3 text-black">
                            <div className="flex  items-center gap-x-2 w-full flex-wrap ">

                                <span className="">
                                    <IoLocationSharp className="text-xl " />
                                </span>
                                <span className="font-semibold ">Address</span>
                                <span className="">1670 Paonia St Suite 120 Colorado Springs, CO 80915</span>

                            </div>
                            <div className="flex  items-center gap-x-2 w-full flex-wrap">
                                <span className="">

                                    <BsTelephoneFill className="text-xl " />
                                </span>
                                <span className="font-semibold ">Phone Number</span>
                                <span className="">(214) 766-6176</span>
                            </div>
                            <div className="flex  items-center gap-x-2 w-full flex-wrap">
                                <span className="">
                                    <MdEmail className="text-xl " />
                                </span>
                                <span className="font-semibold ">Email</span>
                                <span className="">contact@kjsautohailrepair.com</span>
                            </div>
                            {/* <div className="flex  items-center gap-x-2 w-full flex-wrap">
                                <span className="">

                                    <BiSolidTimeFive className="text-xl " />
                                </span>
                                <span className="font-semibold ">Timing</span>
                                <span className=""> Mon - Fri 8:00 - 5:00</span>
                            </div> */}

                        </div>
                    </div>

                    <div className="pt-4">

                        <h4 className="font-semibold mb-3 sm:mb-5">Social Links</h4>
                        <div className=" flex items-center gap-x-3">

                            <a href="https://www.facebook.com/kjsautohailrepair" className="text-2xl text-[#1877F2]">
                                <BsFacebook />
                            </a>
                            {/* <a href="" className="text-2xl text-[#1877F2]">
                                <FaTwitter />
                            </a>
                            <a href="" className="text-2xl text-[#1877F2]">
                                <FaInstagram />
                            </a> */}
                        </div>
                    </div>
                </div>
            </footer>
            <p className="flex justify-center items-center px-4 sm:text-base sm:text-center bg-gray-200 py-2">
                Copyright &copy; {new Date().getFullYear()} All rights reserved by KJS Auto Hail Repair
            </p>
            <p className="flex justify-center items-center px-4 sm:text-base sm:text-center bg-emerald-950 py-2 text-white	">
                developed and designed by &nbsp;<a href='http://www.envysionwithawhy.com' className='underline'>envysion digital marketing</a>
            </p>
        </>
    )
}

export default Footer