// import { Link } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";

const Hero = () => {
    // return (
    //     <>
    //         <div className="relative  bg-hero_bg min-h-[700px] bg-cover rounded-br-[30%] bg-center">
    //             <NavBar />

    //             <div className="w-11/12 mx-auto px-3 h-[600px] text-white  flex justify-center items-start flex-col max-w-[1700px] ">
    //                 <h1 className="text-7xl text-center font-semibold sm:text-6xl xsm:text-5xl">KJS Auto Hail Repair
    //                 </h1>
    //                 <h2 className="text-4xl text-center mt-6 xsm:text-3xl">

    //                     Your Trusted Source for Hail Damage Solutions
    //                 </h2>

    //                 <Link to={"/Contact"} className="w-40 h-12 md:mx-auto flex justify-center items-center  mt-5 rounded-lg bg-[#f79f24] font-semibold text-white">Contact Us Today</Link>
    //             </div>

    //         </div>
    //     </>
    // )
    return (
        <div className="relative bg-black min-h-[700px] bg-cover bg-center rounded-br-[30%]">
          {/* Video Background */}
          <video className="absolute top-0 left-0 w-full h-full object-cover bg-cover bg-center rounded-br-[30%]" autoPlay>
            <source src="src/assets/comp_vid_hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
    
          {/* Content Overlay */}
          <div className="relative z-10 bg-opacity-75 text-white">
            {/* Navigation Bar */}
            <NavBar />
    
            <div className="container mx-auto p-4 h-[600px] flex flex-col justify-center items-center">
              <h1 className="text-7xl text-center font-semibold sm:text-6xl xsm:text-5xl">
                KJS Auto Hail Repair
              </h1>
              <h2 className="text-4xl text-center mt-6 xsm:text-3xl">
                Your Trusted Source for Hail Damage Solutions
              </h2>
              <a
                href="/Contact"
                className="w-40 h-12 md:mx-auto flex justify-center items-center mt-5 rounded-lg bg-[#f79f24] font-semibold text-white"
              >
                Contact Us Today
              </a>
            </div>
          </div>
        </div>
      );
}

export default Hero